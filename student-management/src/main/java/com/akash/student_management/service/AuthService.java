package com.akash.student_management.service;

import com.akash.student_management.auth.AuthRequest;

import com.akash.student_management.auth.AuthResponse;

import com.akash.student_management.model.User;

import com.akash.student_management.repository.UserRepository;

import com.akash.student_management.security.JwtService;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service

public class AuthService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public AuthService(

            UserRepository repository,

            PasswordEncoder passwordEncoder,

            JwtService jwtService) {

        this.repository = repository;

        this.passwordEncoder = passwordEncoder;

        this.jwtService = jwtService;
    }

    // Register User

    public User registerUser(User user) {

        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()
                )
        );

        return repository.save(user);
    }

    // Login User

    public AuthResponse loginUser(
            AuthRequest request) {

        User user = repository.findByEmail(
                request.getEmail()
        ).orElseThrow(() ->

                new RuntimeException(
                        "User Not Found"
                )
        );

        boolean passwordMatches =
                passwordEncoder.matches(

                        request.getPassword(),

                        user.getPassword()
                );

        if(!passwordMatches){

            throw new RuntimeException(
                    "Invalid Password"
            );
        }

        // Generate JWT Token

        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new AuthResponse(token);
    }
}