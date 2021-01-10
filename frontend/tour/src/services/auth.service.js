import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService{
    login(username, password) {
        return axios.post(API_URL + 'signin', {username, password}).then(
          res=>{
            if(res.data.token){
              localStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
      });
    }
    
    
      logout() {
        localStorage.removeItem('user');
      }
    
      register(username, password, email) {
        return axios.post(API_URL + "signup", {username, password, email});
      }
    
      getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
      }
    }
    
    export default new AuthService();