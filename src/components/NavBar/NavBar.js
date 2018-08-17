import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

  let currentUser = {};

  return (
    <nav className='navbar'>
      <div className='dropdown'>
        <div
          id='palabras-dropdown1'
          className='dropdown1'
        >
          <Link
            to={ '/' }
            className='btn btn-default'
          >
            SixBySix
          </Link>
          <div
            id='palabras-content1'
            className='content'>
            <Link
              to={{
                pathname: '/about'
              }}
              className='btn btn-default'
            >
              About
            </Link>
            <Link
              to={{
                pathname: '/faq',
              }}
              className='btn btn-default'
            >
              FAQ
            </Link>
            <Link
              to={{
                pathname: '/leaderboard'
              }}
              className='btn btn-default'
            >
              Leaderboard
            </Link>
          </div>
        </div>
        <div
          id='palabras-dropdown2'
          className='dropdown1'>
          <Link
            to={ '/' }
            className='btn btn-default'
          >
            Privacy
          </Link>
          <div
            id='palabras-content2'
            className='content'>
          <Link
            to={{
              pathname: '/privacy-policy'
            }}
            className='btn btn-default'
          >
            Privacy Policy
          </Link>
          <Link
            to={{
              pathname: '/terms-of-service'
            }}
            className='btn btn-default'
          >
            Terms of Service
          </Link>
          </div>
        </div>
        <div className='auth'>
          <div
            className="fb-login-button"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="true" 
            ata-auto-logout-link="false"
            data-use-continue-as="true">
          </div>
        </div>
      </div>
    </nav>
  );
}



export default NavBar;
