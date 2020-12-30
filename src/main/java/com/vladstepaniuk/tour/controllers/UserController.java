package com.vladstepaniuk.tour.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/user/")
public class UserController {

    @PostMapping("tour/add/{id}")
    public ResponseEntity<?> addToUsersTours(String username, @PathVariable int id){
        return null;
    }
}
