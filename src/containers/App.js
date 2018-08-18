import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FacebookMessenger from 'react-facebook-message-us'
import Main from './Main';
import NavBar from './../components/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <h1>SixBySix</h1>
        <p>m.me/sixbysixvote</p>
        <FacebookMessenger
          icon={optionalIconOverride}
          page="SixBySix" 
          msg="Message Us" />
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
