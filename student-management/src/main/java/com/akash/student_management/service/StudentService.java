package com.akash.student_management.service;

import com.akash.student_management.exception.StudentNotFoundException;
import com.akash.student_management.model.Student;
import com.akash.student_management.repository.StudentRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    // Get all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Add student
    public Student addStudent(Student student) {
        return repository.save(student);
    }

    // Get student by ID
    public Student getStudentById(String id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException(
                                "Student not found with id: " + id));
    }

    // Update student
    public Student updateStudent(String id, Student student) {

        Student existingStudent = repository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException(
                                "Student not found with id: " + id));

        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setBranch(student.getBranch());
        existingStudent.setMarks(student.getMarks());

        return repository.save(existingStudent);
    }

    // Delete student
    public void deleteStudent(String id) {

        repository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException(
                                "Student not found with id: " + id));

        repository.deleteById(id);
    }
}