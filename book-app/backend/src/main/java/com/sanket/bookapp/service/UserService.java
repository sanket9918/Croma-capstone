package com.sanket.bookapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.sanket.bookapp.model.User;
import com.sanket.bookapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("username not found"));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public User addUser(User user) {
        User user1 = new User();
        user1.setEmail(user.getEmail());
        user1.setFullName(user.getFullName());
        user1.setPassword(passwordEncoder.encode(user.getPassword()));
        User usr = userRepository.save(user1);
        return usr;
    }

    // public User updateUser(User user) {

    // User usr = userRepository.save(user);
    // return usr;
    // }

    public ResponseEntity<User> updateUser(User user) {
        Optional<User> user1 = userRepository.findById(user.getId());
        if (user1.isPresent()) {
            User _user = user1.get();
            _user.setFullName(user.getFullName());
            _user.setEmail(user.getEmail());
            _user.setPassword(user.getPassword());

            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    public String deleteUser(int id) {
        userRepository.deleteById(id);
        return "User deleted successfully";
    }

    public User getOneUser(int id) {
        User usr = userRepository.findById(id).orElse(null);
        return usr;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
