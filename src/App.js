import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import {Provider} from 'react-redux';
import store from './example';

class App extends Component {
  render() {
    return (
     <Provider store={store}>  
       <List/>
      </Provider>  
 
    );
  }
}

export default App;
