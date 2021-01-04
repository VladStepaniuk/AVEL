import React, { Component } from 'react';
import pic1 from '../1.svg';
import axios from 'axios';
import '../components/Signin.css';

export default class Signin extends Component {
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();

        const{username, password} = this.state;

        axios.post('http://localhost:8080/api/auth/signin', {username, password}).then(
            res=>{
                localStorage.setItem('user', JSON.stringify(res.data));
                this.props.history.push('/');
                window.location.reload();
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
    }

    render() {
        const{username, password} = this.state;
        return (
            <div className='container'>
            <div className='forms-container'>
                <div className="signin-signup">
                    <form onSubmit={this.handleSubmit} className='sign-in-form'>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className='fas fa-user' />
                            <input type='text' name='username' value={username} placeholder='Username' onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <i className='fas fa-lock' />
                            <input type='password' name='password' value={password} placeholder='Password' onChange={this.handleChange}/>
                        </div>
                        <button type='submit' className='btn solid'>Login</button>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href='/' className='social-icon'>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href='/' className='social-icon'>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='/' className='social-icon'>
                                <i className='fab fa-google'></i>
                            </a>
                            <a href='/' className='social-icon'>
                                <i className='fab fa-linkedin-in'></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nulla iure facere?</p>
                        <button className="btn transparent" onClick={this.changeToSignIn}>Sign Up</button>

                        <img src={pic1} className='image' alt=''/>
                    </div>
                </div>
            </div>
        </div> 
        )
    }
}
