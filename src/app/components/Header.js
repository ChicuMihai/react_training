import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home" className="navbar-brand">Home</Link>
                    <Link to="/user" className="navbar-brand">User</Link>
                    <Link to="/register" className="navbar-brand">Register</Link>
                    <Link to="/login" className="navbar-brand">Login</Link>
                    <Link to="/edituser" className="navbar-brand">Edit Users</Link>
                </div>
            </div>
        </nav>
    )

}
