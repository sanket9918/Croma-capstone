package com.sanket.bookapp.controller;

import com.sanket.bookapp.model.Auth;
import com.sanket.bookapp.model.User;
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

@RestController
public class BookController {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String greet() {
        return "Welcome to Book app";

    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> generateToken(@RequestBody Auth authRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));

            return new ResponseEntity<String>(jwtUtil.generateToken(authRequest.getUserName()), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.NOT_FOUND);
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


    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        return userService.deleteUser(id);

    }

}
