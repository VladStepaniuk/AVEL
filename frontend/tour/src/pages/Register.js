import React, { Component } from 'react';
import './style.css';

export default class Register extends Component {
    render() {
        return (
            <div className='base-container'>
                <div className='header'>Registration</div>
                <div className='content'>
                    <div className='image'>

                    </div>
                    <div className='form'>
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' placeholder='Username' />
                        </div>
                        <div className="form-group">
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' placeholder='Email' />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' placeholder='Password' />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type='submit' className='btn'>
                        Register
                    </button>
                </div>
            </div>
        )
    }
}
