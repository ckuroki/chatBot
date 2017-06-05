import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import MainPage from './containers/MainPage';
import LoginPage from './containers/LoginPage';
import './App.css';

const history= createHashHistory();

const App = (props) =>(
  <Router history={history}>
    <div>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/login" component={LoginPage}/>
    </div>
  </Router>
);

export default App;
