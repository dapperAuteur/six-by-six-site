import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''        
    };
    componentClicked = () => console.log("componentClicked");

    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            id: response.id,
            userID: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            accessToken: response.accessToken
        })
    };
  render() {
      let fbContent;
      let picture = this.state.picture;

      if (this.state.isLoggedIn) {
          console.log(this.state); 
        fbContent = null;
      } else {
          fbContent = (
            <FacebookLogin
                appId="1645178768938930"
                autoLoad={ true }
                fields="name,email,picture"
                onClick={ this.componentClicked }
                callback={ this.responseFacebook } />
            )
      }
    return (
      <div>
        { fbContent }
        { picture }
      </div>
    )
  }
}
