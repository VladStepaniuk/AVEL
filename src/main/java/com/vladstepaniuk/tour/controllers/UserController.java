package com.vladstepaniuk.tour.controllers;

import com.vladstepaniuk.tour.config.service.UserDetailsServiceImpl;
import com.vladstepaniuk.tour.domain.Tour;
import com.vladstepaniuk.tour.domain.User;
import com.vladstepaniuk.tour.payload.response.MessageResponse;
import com.vladstepaniuk.tour.payload.response.TourResponse;
import com.vladstepaniuk.tour.repositories.UserRepository;
import com.vladstepaniuk.tour.services.TourService;
import org.apache.coyote.Response;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("api/user/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsServiceImpl userService;

    @Autowired
    private TourService tourService;

    @PostMapping("tour/add/{id}")
    public ResponseEntity<User> addToUsersTours(@PathVariable Long id, @RequestParam("username") String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        Tour tour = tourService.getById(id);
        user.getTours().add(tour);
        userRepository.save(user);
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("tours/get/{username}")
    public ResponseEntity<List<TourResponse>> getFavouriteTours(@PathVariable String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        List<TourResponse> tours = user.getTours().stream().map(tour -> {
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
                    true
            );
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(tours);
    }

    @PostMapping("tour/delete/{id}/{username}")
    public ResponseEntity<MessageResponse> deleteTourFromFav(@PathVariable Long id, @PathVariable String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("User not found with username: " + username));
        Tour tour = tourService.getById(id);

        user.getTours().remove(tour);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Tour deleted succesfully with id: " + id));
    }
}
