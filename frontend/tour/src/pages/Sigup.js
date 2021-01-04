import React, { Component } from 'react';
import pic2 from '../2.svg';
import '../components/Signin.css';

export default class Sigup extends Component {
    render() {
        return (
            <div className='container sign-up-mode'>
            <div className='forms-container'>
                <div className="signin-signup">
                <form action='' className='sign-up-form'>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className='fas fa-user' />
                            <input type='text' placeholder='Username'/>
                        </div>
                        <div className="input-field">
                            <i className='fas fa-envelope' />
                            <input type='text' placeholder='Email'/>
                        </div>
                        <div className="input-field">
                            <i className='fas fa-lock' />
                            <input type='password' placeholder='Password'/>
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
                        <button className="btn transparent" id="sign-in-btn" onClick={this.changeToSignUp}>Sign In</button>

                        <img src={pic2} className='image' alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}
