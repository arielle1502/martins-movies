import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';

import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {

   
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
     <Navbar/>
     {/* <Route exact path='/' component={Movies} /> */}
    </div>
    <Route exact path='/' component={Movies} />
    </Router>
   </Provider>
  );
}


export default App;
