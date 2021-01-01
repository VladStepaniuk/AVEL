package com.vladstepaniuk.tour.controllers;


import com.vladstepaniuk.tour.domain.Tour;
import com.vladstepaniuk.tour.payload.request.TourCreateRequest;
import com.vladstepaniuk.tour.payload.response.MessageResponse;
import com.vladstepaniuk.tour.payload.response.TourResponse;
import com.vladstepaniuk.tour.services.TourService;
import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/tours")
public class TourController {

    @Value("${hoster.app.upload.dir}")
    private String uploadDir;

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TourService tourService;

    @PostMapping("/add")
    public ResponseEntity<?> addNewTour(@Valid @RequestBody TourCreateRequest tourRequest,
                                        HttpServletRequest request) throws IOException {

        String message;
        Timestamp currentTimestamp = new Timestamp(System.currentTimeMillis());

        Tour tour = new Tour(tourRequest.getTitle(), 0, tourRequest.getPrice(),
                tourRequest.getPlace(), tourRequest.getDescription(),
                tourRequest.getInStock(), currentTimestamp, tourRequest.getFile());

        boolean status = tourService.saveTour(tour);
        if (status) {
            message = "Tour created successfully!";
            return new ResponseEntity<>(new MessageResponse(message), HttpStatus.OK);
        }
        else {
            message = "Tour creation failed!";
            return new ResponseEntity<>(new MessageResponse(message), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<TourResponse>> getTours(){
        List<TourResponse> tours = tourService.getAllTours().map(tour -> {

            return new TourResponse(
                    tour.getId(),
                    tour.getTitle(),
                    tour.getRating(),
                    tour.getPrice(),
                    tour.getDescription(),
                    tour.getInStock(),
                    tour.getPlace(),
                    tour.getFilePath(),
                    tour.getCreatedDate(),
                    false
            );
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(tours);
    }

    @GetMapping("/{id}/info")
    public ResponseEntity<TourResponse> getTourInfo(@PathVariable Long id){
        Tour tour = tourService.getById(id);


        return ResponseEntity.status(HttpStatus.OK)
                .body(new TourResponse(
                        tour.getId(),
                        tour.getTitle(),
                        tour.getRating(),
                        tour.getPrice(),
                        tour.getDescription(),
                        tour.getInStock(),
                        tour.getPlace(),
                        tour.getFilePath(),
                        tour.getCreatedDate(),
                        false)
                );
    }
}
