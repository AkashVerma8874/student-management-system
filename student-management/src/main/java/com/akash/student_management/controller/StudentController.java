package com.akash.student_management.controller;
import com.akash.student_management.model.Student;
import com.akash.student_management.service.StudentService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/students")
public class StudentController {
     private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@Valid @RequestBody Student student) {
        return service.addStudent(student);
    }
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable String id) {
        service.deleteStudent(id);
        return "Student Deleted";
    }
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable String id) {
        return service.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable String id,
                                @Valid @RequestBody Student student) {

        return service.updateStudent(id, student);
    }

}
