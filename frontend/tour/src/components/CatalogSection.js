import React, { Component } from 'react';
import TourService from '../services/tour.service';
import './CatalogSection.css';

export default class CatalogSection extends Component {
    constructor(props){
        super(props);

        this.state={
            tours: []
        }
        this.viewTour = this.viewTour.bind(this);
    }

    componentDidMount(){
        TourService.getAllTours().then((res) =>{
            this.setState({tours: res.data})
        });
       
    }

    viewTour(id){
        this.props.history.push(`/tours/${id}`);
    }

    render() {
        let tourList = this.state.tours.map((item) =>
        <div className='card-container' key={item.id}>
            <div className="image-container">
                <img src=''/>
            </div>
            <div className="card-title">
                <h3>{item.title}</h3>
            </div>
            <div className="card-body">
                <p>{item.place}</p>
            </div>
            <div className="card-price">
                <p>{item.price}<span>.00$</span></p>
            </div>
            <div className="btn">
                <button onClick={() => this.viewTour(item.id)}>View more</button>
            </div>
        </div>
        )
        return (
            <div className='catalog-container'>
                <h3>Our tours</h3>
                {tourList}
            </div>
        )
    }
}
