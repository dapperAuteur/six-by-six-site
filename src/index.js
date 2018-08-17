import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('', {
    debug: true
  });
  
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
    <Router
        forceRefresh={ !supportsHistory }>
        <App />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
