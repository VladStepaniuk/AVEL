package com.vladstepaniuk.tour.repositories;

import com.vladstepaniuk.tour.domain.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour, Long> {
}
