import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import User from './components/User';
import Home from './components/Home';
import Root from './components/Root';
import Login from './components/Login';
import EditUser from './components/EditUser'
import Registration from './components/Registration';
import { HashRouter, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="container">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/home" className="navbar-brand">Home</Link>
                <Link to="/user" className="navbar-brand">User</Link>
              </div>
            </div>
          </nav> */}
          <Root>
            <Route path="/home" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/edituser" component={EditUser} />


          </Root>
        </div>

      </HashRouter>
    );
  }
}

export default App;
