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
                <div className='header'>Login</div>
                <div className='content'>
                    <div className='image'>

                    </div>
                    <div className='form'>
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' placeholder='Username' />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' placeholder='Password' />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type='submit' className='btn'>
                        Login
                    </button>
                </div>
                {/*<p>Login page</p>
                <form name="form" onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={this.handleChange}/>
                    <button disabled={loading}>Login</button>
                    {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt='image'/>
                    }
                {error &&<p>{error}</p>}
                </form>
                */}
            </div>
            </div>
        )
    }
}
