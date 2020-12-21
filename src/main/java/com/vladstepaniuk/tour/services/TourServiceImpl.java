package com.vladstepaniuk.tour.services;

import com.vladstepaniuk.tour.domain.Tour;
import com.vladstepaniuk.tour.repositories.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;

@Service
@Transactional
public class TourServiceImpl implements TourService {

    @Autowired
    private TourRepository tourRepository;

    @Override
    public boolean saveTour(Tour tour) throws IOException {
        try{
            if(tour != null){
                tourRepository.save(tour);
                return true;
            }
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return false;
    }

    @Override
    public Iterable<Tour> getAllTours() {
        return tourRepository.findAll();
    }
}
