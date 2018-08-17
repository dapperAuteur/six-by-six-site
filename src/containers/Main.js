import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivacyPolicy from './../components/Privacy/PrivacyPolicy';
import TermsOfService from './../components/Privacy/TermsOfService';

const routes = [
    {
      path: '/privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/terms-of-service',
      component: TermsOfService
    }
  ];

  class Main extends Component {
      render() {
          return (
            <div className="Main">
            <Switch>
              { routes.map(({ path, component: C, data }) => (
                <Route
                  key= { C }
                  path={ path }
                  render={ (props) => <C
                    { ...props }
                    data={ this.props } /> }
                  />
              ))}
            </Switch>
          </div>
          )
      }
  }

  export default withRouter(Main);