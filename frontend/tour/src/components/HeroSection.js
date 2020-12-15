import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './HeroSection.css';

export default class HeroSection extends Component {
    render() {
        return (
            <div className='hero-container'>
                <video src="videos/1.mp4" autoPlay loop muted />
                <h1>TRAVEL WITH AVEL</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'></Button>
                </div>
            </div>
        )
    }
}
