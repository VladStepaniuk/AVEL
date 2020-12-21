import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import './style.css';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
            loading: false,
            submitted: false,
            error: ''
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        const{name, value} = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({submitted: true});
        const{ username, password} = this.state;

        if(!(username && password)){
            return;
        }

        this.setState({ loading: true, message:''});
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
        const{username, password, loading, error, message} = this.state;
        return (
            <div className='login-container'>
            <div className='base-container'>
                <form onSubmit={this.handleSubmit}>
                <div className='header'>Login</div>
                <div className='content'>
                    <div className='image'>

                    </div>
                    <div className='form'>
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' placeholder='Username' value={username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                    <button type='submit' className='btn'>
                        Login
                    </button>
                 </form>
            </div>
            </div>
           
        )
    }
}
