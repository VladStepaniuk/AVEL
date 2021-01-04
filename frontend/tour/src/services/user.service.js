import axios from 'axios';
import authHeader from './auth-header';

const API_TEST_URL = 'http://localhost:8080/api/test/';
const API_URL = 'http://localhost:8080/api/user/';

class UserService {
  getPublicContent() {
    return axios.get(API_TEST_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_TEST_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_TEST_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_TEST_URL + 'admin', { headers: authHeader() });
  }

  addToFavourite(id, data){
    return axios.post(API_URL + 'tour/add/' + id, data, { headers: authHeader() });
  }

  getUsersTours(username){
    return axios.get(API_URL + 'tours/get/' + username,{ headers: authHeader() });
  }

  deleteTourFromFav(username, id){
    return axios.post(API_URL + 'tour/delete/' + id, username, { headers: authHeader() } );
  }
}

export default new UserService();