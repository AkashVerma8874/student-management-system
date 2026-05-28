package com.akash.student_management.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Document(collection = "students")

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Student {

    @Id
    private String id;

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Branch cannot be empty")
    private String branch;

    @Min(value = 0, message = "Marks cannot be negative")
    @Max(value = 100, message = "Marks cannot exceed 100")
    private int marks;
}