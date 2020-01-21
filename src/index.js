import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import track, { useTracking } from 'react-tracking';


/**
 * Definition du tracking et du dispatch en haut des composants 
 */
const TrackedApp = track(
    // app-level tracking data
    { app: "ToDoList" },
  
    // top-level options
    {
      // custom dispatch to console.log in addition to pushing to dataLayer[]
      dispatch: data => {
        console.log(data);
        (window.trackingData = window.trackingData || []).push(data);
      }
    }
  )(App);


//   ReactDOM.render(<App />, document.getElementById('root'));
  ReactDOM.render(<TrackedApp />, document.getElementById('root'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
