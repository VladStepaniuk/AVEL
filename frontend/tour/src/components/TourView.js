import React, { Component } from 'react';
import TourService from '../services/tour.service';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import './TourView.css';

export default class TourView extends Component {
    constructor(props){
        super(props);

        this.state={
            id: this.props.match.params.id,
            item: {},
            user: undefined
        }
        this.addFavourite = this.addFavourite.bind(this);
        this.deleteFromFav = this.deleteFromFav.bind(this);
    }
    
    componentDidMount(){
        const user = AuthService.getCurrentUser();
        
        if(user){
            UserService.getTourByUser(this.state.id, user.username).then((res) =>{
                this.setState({ item: res.data, user: user});
            });
        }
        else{
            TourService.getTourById(this.state.id).then((res) => {
                this.setState({ item: res.data });
            });
        }
        
    }

    addFavourite(){
        console.log("Button add pressed!");
        const user = AuthService.getCurrentUser();
        var data = new FormData();
        data.append("username", user.username);
        UserService.addToFavourite(this.state.id, data).then(res => {
            console.log(res);
        });
        window.location.reload();
    }

    deleteFromFav(){
        console.log("Button delete pressed!");
        UserService.deleteTourFromFav(this.state.user.username, this.state.id).then(res => {
            console.log(res);
        });
        window.location.reload();
    }

    render() {
        const { item } = this.state;
        return (
            <div className='t-container'>
            <div className='tour-container'>
                        <div className='details'>
                            <div className='big-img'>
                                <img src={item.path} alt=""/>
                            </div>
                            <div className='box'>
                            <div className='row'>
                                <h2>{item.title}</h2>
                                <span>{item.price}.00$</span>
                            </div>
                            <p>{item.rating}</p>
                            <p>{item.description}</p>
                            <p>{item.place}</p>
                            <p>{item.inStock}</p>
                            {item.contain ? (
                                <button className='cart' onClick={this.deleteFromFav}>Delete from fav</button>
                            ) : (
                                <button className='cart' onClick={this.addFavourite}>Make favourite</button>
                            )}
                            
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
}
