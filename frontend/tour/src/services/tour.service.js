import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tours/';

class TourService{
    addNewTour(data){
        return axios.post(API_URL + 'add', data, {
            headers: {
                "Content-Type":"application/json"
            }
        });
    }

    getAllTours(){
        return axios.get(API_URL + 'all');
    }
}

export default new TourService();