import React, { Component } from 'react';
import UserService from '../services/user.service';
import '../components/CatalogSection.css';
import AuthService from '../services/auth.service';

export default class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            tours: []
        };
    }

    componentDidMount(){
        const user = AuthService.getCurrentUser();
        UserService.getUsersTours(user.username).then(res => {
            this.setState({
                tours: res.data
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Your favourite tours:</h1>
                {this.state.tours.map((item) => <div className='card' key={item.id}>
            <img src={item.path} alt={item.path} className="card-img"/>
            <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-info-field">{item.place}</p>
                <p className="card-price">{item.price}<span>.00$</span></p>
                <button onClick={() => this.viewTour(item.id)}>View more</button>
            </div>
        </div>
        )}
            </div>
        )
    }
}
