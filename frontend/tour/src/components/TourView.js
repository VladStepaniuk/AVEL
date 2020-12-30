import React, { Component } from 'react';
import './TourView.css';

export default class TourView extends Component {
    state={
        tours:[
            {
                "id": "1",
                "title": "Amazing grace",
                "src": "https://wallpapershome.com/images/pages/ico_h/19758.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "price": "564.00$",
                "rating" : "5",
                "place":"Madagascar",
                "inStock":"12"
            }]

    }
    render() {
        const {tours} = this.state;
        return (
            <div className='container'>
            <div className='tour-container'>
                {
                    tours.map(item => (
                        <div className='details'>
                            <div className='big-img'>
                                <img src={item.src} alt=""/>
                            </div>
                            <div className='box'>
                                <div className='row'>
                                    <h2>{item.title}</h2>
                                    <span>{item.price}</span>
                                </div>
                            <p>{item.rating}</p>
                            <p>{item.description}</p>
                            <p>{item.place}</p>
                            <p>{item.inStock}</p>
                            <button className='cart'>Favorite</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        )
    }
}
