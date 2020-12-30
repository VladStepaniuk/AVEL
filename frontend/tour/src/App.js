import {React, Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreationTour from './components/CreationTour';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tours from './pages/Tours';
import axios from 'axios';
import TourView from './components/TourView';

export default class App extends Component {
  state={};
  componentDidMount(){
    const config = {
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('user')
        }
    };
    axios.get('http://localhost:8080/api/test/user', config).then(
        res=>{
            this.setState({
                user: res.data
            });
        },
        err=>{
            console.log(err);
        }
    )
}

  render(){
  return (
    <div className="App">
      <Router>
          <Navbar user={this.state.user}/>
          <Switch>
            <Route path='/' exact component={()=><Home user={this.state.user}/>}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/add-tour' component={CreationTour}/>
            <Route path='/tours' component={Tours}/>
            {/*<Route path='/tours/:id' component={TourView}/>*/}
            <Route path='/info' component={TourView}/>
          </Switch>
      </Router>
    </div>
  );
  }
}


