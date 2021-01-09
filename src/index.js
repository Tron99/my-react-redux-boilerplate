import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
import thunk from 'redux-thunk';

import {
  createFirestoreInstance,
  firestoreReducer
} from 'redux-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcDumxKlq_hOAMmlZywqK67zrtDVG6C1U",
  authDomain: "office-45.firebaseapp.com",
  projectId: "office-45",
  storageBucket: "office-45.appspot.com",
  messagingSenderId: "59383862627",
  appId: "1:59383862627:web:6cbbc4ceb7425cc3e06f56",
  measurementId: "G-Q1W3NJ3TE4"
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

let middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
}), { title: 'chatRoom' }, composeEnhancers(applyMiddleware(...middleware))
)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
