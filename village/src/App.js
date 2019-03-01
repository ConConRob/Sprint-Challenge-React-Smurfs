import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    this.readSmurfs();
  }
  readSmurfs = () =>{
    axios.get(url)
      .then(res => this.setSmurfs(res.data))
  }
  createSmurf = (name, age, height) =>{
    const body={
      name,
      age,
      height
    }
    axios.post(url,body)
      .then(res=> this.setSmurfs(res.data))
      .catch(err => console.log(err));
  }

  deleteSmurf = (id) => {
    axios.delete(url+'/'+id)
      .then(res=> this.setSmurfs(res.data))
      .catch(err=>console.log(err));
  }

  setSmurfs = (smurfs) =>{
    this.setState({smurfs});
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
          <nav>
            <NavLink exact to='/' >Village</NavLink>
            <NavLink exact to='/smurf-form' >Move Smurf In</NavLink>

          </nav>
        <Route path='/smurf-form' render={props => <SmurfForm createSmurf={this.createSmurf}/>}/>
        <Route exact path='/' render={()=>
          <Smurfs 
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf} 
          />
        }/>       
      </div>
    );
  }
}

export default App;
