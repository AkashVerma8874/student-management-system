package com.akash.student_management.security;

import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Service;

import java.security.Key;

import java.util.Date;

@Service

public class JwtService {

    // Secret Key

    private static final String SECRET_KEY =
            "mysupersecretkeymysupersecretkey12345";

    // Generate Token

    public String generateToken(String email) {

        Key key = Keys.hmacShaKeyFor(
                SECRET_KEY.getBytes()
        );

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                + 1000 * 60 * 60
                        )
                )

                .signWith(
                        key,
                        SignatureAlgorithm.HS256
                )

                .compact();
    }
}