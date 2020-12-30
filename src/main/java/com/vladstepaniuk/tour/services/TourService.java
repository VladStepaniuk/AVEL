package com.vladstepaniuk.tour.services;

import com.vladstepaniuk.tour.domain.Tour;

import java.io.IOException;
import java.util.stream.Stream;

public interface TourService {

    boolean saveTour(Tour tour) throws IOException;

    Stream<Tour> getAllTours();

    Tour getById(Long id);
}
