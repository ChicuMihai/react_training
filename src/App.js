import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import User from './app/container/User'
import Home from './app/components/Home';
import Root from './app/components/Root';
import Login from './app/container/Login';
import EditUser from './app/container/EditUser'
import Registration from './app/components/Registration';
import { HashRouter, Link } from 'react-router-dom';

const App = () => {


  return (
    <HashRouter>
      <Root>
        <Route path="/home" component={Home} />
        <Route path="/user/:id" component={User} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/edituser" component={EditUser} />
      </Root>
    </HashRouter>
  );

}

export default App;
