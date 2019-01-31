import React, { Component } from 'react'
import { users } from '../components/data/users';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleUserInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    logUserIn = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                this.props.history.push('/user/' + users[i].id)
                localStorage.setItem('logged_users', JSON.stringify(users[i]));

            }


        }



    }


    render() {
        return (
            <form onSubmit={this.logUserIn}>
                <div className="form-group">
                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" onChange={this.handleUserInput} />

                    </div>

                    <div className="col-md-6">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.handleUserInput} />

                    </div>
                </div>

                <div className="col-md-9">
                    <button className="btn btn-primary">Login</button>
                </div>


            </form>
        )
    }
}
