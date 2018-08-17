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
                callback={ this.responseFacebook }
                className="fb-login-button"
                data-max-rows="1"
                data-size="large"
                data-button-type="continue_with"
                data-show-faces="true"
                data-auto-logout-link="false"
                data-use-continue-as="true" />
            )
      }
    return (
      <div>
        { fbContent }
        <div
            className="fb-login-button"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="true"
            data-auto-logout-link="false"
            data-use-continue-as="true">
        </div>
      </div>
    )
  }
}
