package com.sanket.bookapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sanket.bookapp.dto.LoginUserDto;
import com.sanket.bookapp.model.User;
import com.sanket.bookapp.service.AuthenticationService;
import com.sanket.bookapp.service.UserService;
import com.sanket.bookapp.util.JWTUtil;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {
    private final JWTUtil jwtUtil;

    private final AuthenticationService authenticationService;

    private final UserService userService;

    public AuthenticationController(JWTUtil jwtUtil, AuthenticationService authenticationService,
            UserService userService) {
        this.jwtUtil = jwtUtil;
        this.authenticationService = authenticationService;
        this.userService = userService;

    }

    @PostMapping("/registerUser")
    @ResponseBody
    public User addUser(@RequestBody User user) {
        System.out.println(user.getFullName());
        User usr = userService.addUser(user);
        return usr;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<LoginType> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtUtil.generateToken(authenticatedUser);

        LoginType loginResponse = new LoginType();

        loginResponse.setEmail(authenticatedUser.getEmail());
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtUtil.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

}
