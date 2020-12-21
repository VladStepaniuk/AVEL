import axios from 'axios';
import authHeader from './auth-header';

const API_URL='http://localhost:8080/api/tours/';

class TourService{
    addNewTour(title, price, description, place, inStock, file){
        return axios.post(API_URL + 'add', {
            title, 
            price, 
            description,
            place,
            inStock,
            file,
            headers: authHeader()
        });
    }
}

export default new TourService();