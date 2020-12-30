import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import AuthService from '../services/auth.service';
import Dropdown from './Dropdown';

class Navbar extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentUser: undefined,
            isAuthenticated: false,
            click: false,
            username: undefined,
            dropdown: false
        };
        this.handleClick=this.handleClick.bind(this);
        this.closeMobileMenu=this.closeMobileMenu.bind(this);
    }

    componentDidMount(){
            const user = AuthService.getCurrentUser();
        
            if(user){
                this.setState({
                    currentUser: user
                });
            }
    }

    handleClick(){
        this.setState({
            click: true
        });
    }

    closeMobileMenu(){
        this.setState({
            click: false
        })
    }

    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState({
                dropdown: false
            });
        } else {
            this.setState({
                dropdown: true
            });
        }
      };
    
      onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState({
                dropdown: false
            });
        } else {
            this.setState({
                dropdown: false
            });
        }
      };

    render() {
        let buttons;
        const {currentUser, handleClick, click, closeMobileMenu} = this.state;
        if(currentUser){
            buttons=(
                <>
                <li className='nav-item' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <Link className='nav-links'>{currentUser.username} <i className='fas fa-caret-down'/></Link>
                    {this.state.dropdown &&<Dropdown />}
                </li>
                </>
            )
        }else{
            buttons=(
                <>
                <li className='nav-item'>
                    <Link to={'/login'} className='nav-links'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/register'} className='nav-links'>Register</Link>
                </li>
                </>

            )
        }
        return (
            <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={'/'} className='navbar-logo' onClick={closeMobileMenu}>
                        AVEL
                        <i class="fab fa-accusoft"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tours' className='nav-links' onClick={closeMobileMenu}>Tours</Link>
                        </li>
                    {buttons}
                    </ul>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar;