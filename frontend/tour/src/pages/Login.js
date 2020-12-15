import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
            loading: false,
            submitted: false
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
        const{ username, password, returnUrl} = this.state;

        if(!(username && password)){
            return;
        }

        this.setState({ loading: true});
        
    }

    render() {
        const{username, password, loading} = this.state;
        return (
            <div>
                <p>Login page</p>
                <form name="form" onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={this.handleChange}/>
                    <button disabled={loading}>Login</button>
                </form>
            </div>
        )
    }
}
