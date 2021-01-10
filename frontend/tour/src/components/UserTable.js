import React, { Component } from 'react';
import './UserTable.css';

export default class UserTable extends Component {
    constructor(props){
        super(props);

        this.state={
            users: [
                { id: 1, name: 'User', age: 23},
                { id: 2, name: 'User1', age: 27},
                { id: 3, name: 'User2', age: 35}
            ]
        }
    }

    renderTableData(){
        return this.state.users.map((user, index) => {
            const{id, name, age} = user
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                </tr>
            )
        })
    }

    renderTableHeader(){
        let header = Object.keys(this.state.users[0]);

        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Users of AVEL</h1>
                <table id='users'>
                    <tbody>
                        <tr>{this.renderTableHeader}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
