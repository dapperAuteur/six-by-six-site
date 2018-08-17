import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Main from './Main';
import NavBar from './../components/NavBar/NavBar';
import Facebook from './../components/Facebook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <h1>SixBySix</h1>
        <Facebook />

        <Main />
      </div>
    );
  }
}

export default withRouter(App);
