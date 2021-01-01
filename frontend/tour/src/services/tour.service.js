import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tours/';

class TourService{
    addNewTour(data){
        return axios.post(API_URL + 'add', data);
    }

    getAllTours(){
        return axios.get(API_URL + 'all');
    }

    getTourById(tourId){
        return axios.get(API_URL + tourId + '/info');
    }
}

export default new TourService();