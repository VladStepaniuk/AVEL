import React, { Component } from 'react';
import TourService from '../services/tour.service';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import { withRouter, Redirect } from 'react-router-dom';
import './CatalogSection.css';

class CatalogSection extends Component {
    constructor(props){
        super(props)

        this.state={
            tours: [],
            isChosen: false
        }
       this.viewTour = this.viewTour.bind(this);
    }

    componentDidMount(){
        const user = AuthService.getCurrentUser();

        if(user){
            UserService.getAllToursByUser(user.username).then((res) => {
                this.setState({tours: res.data});
            });
        }
        else {
            TourService.getAllTours().then((res) =>{
                this.setState({tours: res.data})
            });
        } 
    }

    viewTour(id){
        this.props.history.push(`/tours/${id}`);
    }

    render() {
        let tourList = this.state.tours.map((item) =>
        <div className='card' key={item.id}>
            <img src={item.path} alt={item.path} className="card-img"/>
            <div className={` ${item.contain ? 'card-info-fav' : 'card-info'}`} >
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
                    <h1 className='title-list'>Our tours</h1>
                    {tourList}
                </div>
            </>
        )
    }
}

export default withRouter(CatalogSection);
