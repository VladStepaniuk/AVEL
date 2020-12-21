package com.vladstepaniuk.tour.services;

import com.vladstepaniuk.tour.domain.Tour;

import java.io.IOException;

public interface TourService {

    boolean saveTour(Tour tour) throws IOException;
    Iterable<Tour> getAllTours();
}
