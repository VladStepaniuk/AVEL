import React, { Component } from 'react';
import axios from 'axios';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import './Home.css';
import HeroSection from '../components/HeroSection';


export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentUser:undefined
        };
    }

    componentDidMount(){
      UserService.getUserBoard();
      const user = AuthService.getCurrentUser();
      if(user){
          this.setState({
              currentUser: user
          });
      }
  }

    render() {

        return (
            <div className='home-container'>
                <HeroSection />
            </div>
        )
    }
}
