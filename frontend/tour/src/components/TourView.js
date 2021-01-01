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
            isInFav: false
        }
        this.addFavourite = this.addFavourite.bind(this);
    }
    
    componentDidMount(){
        TourService.getTourById(this.state.id).then(res=>{
            this.setState({ item: res.data });
        });
    }

    addFavourite(){
        console.log("Button add pressed!");
        const user = AuthService.getCurrentUser();
        UserService.addToFavourite(this.state.id, user.username).then(res => {
            this.setState({
                isInFav: true
            })
        });
    }

    render() {
        const { item, isInFav } = this.state;
        return (
            <div className='container'>
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
                            <button className='cart' onClick={this.addFavourite}>Make favourite</button>
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
}
