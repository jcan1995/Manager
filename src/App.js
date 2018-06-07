import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
/*
  Provider tag is what connects to all different
  connect tags.
*/

class App extends Component {

  componentWillMount(){
    const config = {
        apiKey: 'AIzaSyBxXYNsWbl4flWYzGvtjrfy8xG-FHyPfUw',
        authDomain:'manager-42124.firebaseapp.com',
        databaseURL: 'https://manager-42124.firebaseio.com',
        projectId: 'manager-42124',
        storageBucket: '',
        messagingSenderId: '379492830215'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>

    );
  }
}

export default App;
