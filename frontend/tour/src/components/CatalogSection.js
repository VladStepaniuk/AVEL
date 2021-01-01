import React, { Component } from 'react';
import TourService from '../services/tour.service';
import { withRouter, Redirect } from 'react-router-dom';
import './CatalogSection.css';

class CatalogSection extends Component {
    constructor(props){
        super(props)

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
        <div className='card' key={item.id}>
            <img src={item.path} alt={item.path} className="card-img"/>
            <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-info-field">{item.place}</p>
                <p className="card-price">{item.price}<span>.00$</span></p>
                <button onClick={() => this.viewTour(item.id)}>View more</button>
            </div>
        </div>
        )
        return (
            <>
                <div className='cards'>
                    <h3>Our tours</h3>
                    {tourList}
                </div>
            </>
        )
    }
}

export default withRouter(CatalogSection);
