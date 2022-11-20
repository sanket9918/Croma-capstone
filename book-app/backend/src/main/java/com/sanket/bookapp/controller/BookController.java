package com.sanket.bookapp.controller;

import com.sanket.bookapp.model.Auth;
import com.sanket.bookapp.model.User;
import com.sanket.bookapp.repository.UserRepository;
import com.sanket.bookapp.service.UserService;
import com.sanket.bookapp.util.JWTUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
class LoginType {
    String token;
    int id;
    String userName;
    String email;
}

@RestController
public class BookController {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String greet() {
        return "Welcome to Book app";

    }

    @PostMapping("/authenticate")
    public ResponseEntity<LoginType> generateToken(@RequestBody Auth authRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
            String token = jwtUtil.generateToken(authRequest.getUserName());
            User user = userRepository.findByUserName(authRequest.getUserName());
            int id = user.getId();
            String userName = user.getUserName();
            String email = user.getEmail();
            LoginType loginType = new LoginType(token, id, userName, email);
            return new ResponseEntity<>(loginType, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("/registerUser")
    @ResponseBody
    public User addUser(@RequestBody User user) {
        User usr = userService.addUser(user);
        return usr;
    }

    @PutMapping("/user")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @GetMapping("/getOneUser/{id}")
    public User getOneUser(@PathVariable int id) {
        return userService.getOneUser(id);
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        return userService.deleteUser(id);

    }

}
