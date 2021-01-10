import React, { Component } from 'react';
import pic2 from '../2.svg';
import AuthService from '../services/auth.service';
import '../components/Signin.css';

export default class Sigup extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const{name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();

        const {username, password, email} = this.state;
        
        AuthService.register(username, password, email).then((res) =>{
            console.log(res);
        });
        
        AuthService.login(username, password).then((res) => {
            console.log(res);
        })
    }

    render() {
        const{username, password, email} = this.state;
        return (
            <div className='container sign-up-mode'>
            <div className='forms-container'>
                <div className="signin-signup">
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className='fas fa-user' />
                                <input type='text' name='username' value={username} placeholder='Username' onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <i className='fas fa-envelope' />
                            <input type='text' name='email' value={email} placeholder='Email'onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <i className='fas fa-lock' />
                            <input type='password' name='password' value={password} placeholder='Password'onChange={this.handleChange}/>
                        </div>
                        <button type='submit' className='btn solid'>Sign up</button>
                        <p className="social-text">Or Sign up with social platforms</p>
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
            <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nulla iure facere?</p>
                        <button className="btn transparent" onClick={() => this.props.history.push('/sign-in')}>Sign In</button>

                        <img src={pic2} className='image-right' alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}
