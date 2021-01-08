import React, { Component } from 'react';
import UserService from '../services/user.service';
import '../components/CatalogSection.css';
import AuthService from '../services/auth.service';
import ProfileInfo from '../components/ProfileInfo';

export default class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            tours: []
        };
        this.deleteTour = this.deleteTour.bind(this);
        this.viewTour = this.viewTour.bind(this);
    }

    componentDidMount(){
        const user = AuthService.getCurrentUser();
        if(user){
        UserService.getUsersTours(user.username).then(res => {
            this.setState({
                tours: res.data
            });
        })
        } else {
            this.props.history.push("/sign-in");
        }
    }

    deleteTour(id){
        const user = AuthService.getCurrentUser();
        UserService.deleteTourFromFav(user.username, id).then(
            res=>{
                console.log(res);
            }
        );
        window.location.reload();
    }

    viewTour(id){
        this.props.history.push(`/tours/${id}`);
    }

    render() {
        return (
            <div className='tour-l-container'>
                <ProfileInfo />
                <div className='tour-list-container'>
                <h1 className='title-list'>Your favourite tours:</h1>
                <div className='cards'>
                {this.state.tours.map((item) => <div className='card' key={item.id}>
                <img src={item.path} alt={item.path} className="card-img"/>
                <div className={` ${item.contain ? 'card-info-fav' : 'card-info'}`} >
                <h3 className="card-title">{item.title}</h3>
                <p className="card-info-field">{item.place}</p>
                <p className="card-price">{item.price}<span>.00$</span></p>
                <button onClick={() => this.viewTour(item.id)}>View more</button>
                <button onClick={() => this.deleteTour(item.id)}>Delete</button>
            </div>
        </div>
        )}
            </div>
            </div>
            </div>
        )
    }
}
