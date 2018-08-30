import React, { Component } from 'react';
import logo from './logo.svg';
import jQuery from 'jquery';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      appointments: []
    }
  }
  componentDidMount() {
    console.log('ajax')
    jQuery.ajax({
      type: 'GET',
      url: 'http://localhost:3001/appointments',
    }).done(data => {
      console.log(data);
      this.setState({ appointments: data })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I am a FreemFrooms!</h1>
        </header>
        <p className="App-intro">
          {this.state.appointments.map(appointment => {
            return(<p>{appointment.title}</p>)
          })}
        </p>
      </div>
    );
  }
}

export default App;
