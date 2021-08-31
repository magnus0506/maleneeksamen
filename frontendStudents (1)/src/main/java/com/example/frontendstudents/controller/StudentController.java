package com.example.frontendstudents.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class StudentController {

    @GetMapping("/subjects")
    public String subjectController(){
        return "subjects";
    }

    @GetMapping("/teachers")
    public String teacherController(){
        return "teachers";
    }

    @GetMapping("/checkaverage")
    public String checkaverageController(){
        return "checkaverage";
    }

    @GetMapping("/newstudent")
    public String nexstudentController(){
        return "newstudent";
    }

}
