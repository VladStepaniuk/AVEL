package com.vladstepaniuk.tour.repositories;

import com.vladstepaniuk.tour.domain.Tour;
import com.vladstepaniuk.tour.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TourRepository extends JpaRepository<Tour, Long> {

}
