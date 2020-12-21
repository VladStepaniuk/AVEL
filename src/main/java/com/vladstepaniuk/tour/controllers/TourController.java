package com.vladstepaniuk.tour.controllers;


import com.vladstepaniuk.tour.domain.Tour;
import com.vladstepaniuk.tour.payload.request.TourCreateRequest;
import com.vladstepaniuk.tour.payload.response.MessageResponse;
import com.vladstepaniuk.tour.repositories.TourRepository;
import com.vladstepaniuk.tour.services.TourService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping("/api/tours")
public class TourController {

    @Value("${hoster.app.upload-dir}")
    private String uploadFolder;

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TourService tourService;

    @PostMapping("/add")
    public ResponseEntity<?> addNewTour(String title, String description, int price, String place, int inStock,
                                        @RequestParam("file") MultipartFile file,
                                        HttpServletRequest request) throws IOException {
        /*if (tourRequest == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }*/
        String message;
        Timestamp currentTimestamp = new Timestamp(System.currentTimeMillis());

        /*Tour tour = new Tour(tourRequest.getTitle(), 0,
                tourRequest.getPrice(),
                tourRequest.getPlace(),
                tourRequest.getDescription(),
                tourRequest.getInStock(),
                file.getOriginalFilename(),
                currentTimestamp,
                file.getContentType(),
                file.getBytes());*/
        Tour tour = new Tour(title, 0, price, place, description, inStock, file.getOriginalFilename(), currentTimestamp,
                file.getContentType(), file.getBytes());

        boolean status = tourService.saveTour(tour);
        if (status) {
            message = "Tour created successfully!\n With filename: " + file.getOriginalFilename();
            return new ResponseEntity<>(new MessageResponse(message), HttpStatus.OK);
        }
        else {
            message = "Tour creation failed!";
            return new ResponseEntity<>(new MessageResponse(message), HttpStatus.BAD_REQUEST);
        }
    }
}
