package com.akash.student_management.controller;

import com.akash.student_management.auth.AuthRequest;
import com.akash.student_management.auth.AuthResponse;
import com.akash.student_management.model.User;

import com.akash.student_management.service.AuthService;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/auth")

@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {

        this.service = service;
    }

    // Register API

    @PostMapping("/register")

    public User registerUser(
            @RequestBody User user) {

        return service.registerUser(user);
    }

    // Login API

    @PostMapping("/login")

    public AuthResponse loginUser(
            @RequestBody AuthRequest request) {

        return service.loginUser(request);
    }
}