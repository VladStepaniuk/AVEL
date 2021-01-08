import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Dropdown.css';
import AuthService from '../services/auth.service';

export default class Dropdown extends Component {
    constructor(props){
        super(props);

        this.state={
            click: false,
            showModBoard: false,
            showAdminBoard: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleClick(){
        this.setState({
            click: !this.state.click
        })
    };

    logout(){
        AuthService.logout();
        window.location.reload();
    };

    componentDidMount(){
        const user = AuthService.getCurrentUser();

        if(user){
            this.setState({
                showModBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    setClick(value){
        this.setState({
            click: value
        })
    }

    render() {
        const {handleClick, click, setClick, showAdminBoard, showModBoard} = this.state;
        return (
            <>
                <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <li>
                        <Link className='dropdown-link' to='/profile' onClick={() => this.setClick(false)}>
                            Profile
                        </Link>
                    </li>
                    {showModBoard && (
                        <Link to={'/moderator/panel'} className='dropdown-link' onClick={() => this.setClick(false)}>
                            Moderator Board
                        </Link>
                    )}

                    {showAdminBoard && (
                        <Link to={'/admin/panel'} className='dropdown-link' onClick={() => this.setClick(false)}>
                            Admin Board
                        </Link>
                    )}
                    <li>
                        <Link to={'/'} onClick={()=>this.logout()} className='dropdown-link'>
                            Logout
                        </Link>
                    </li>
                    
                </ul>
            </>
        )
    }
}
