import React, { Component } from 'react'
import { users } from './data/users';

export default class Registration extends Component {
    state = {
        firstName: {
            value: '',
            'errors': ''
        },
        lastName: {
            value: '',
            'errors': ''
        },
        email: {
            value: '',
            'errors': ''
        },
        password: {
            value: '',
            'errors': ''
        },
        confirmPassword: {
            value: '',
            'errors': ''
        },
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: { ...this.state[name], value: value } });
    }
    validateForm = (e) => {
        e.preventDefault();
        //First Name validation
        if (!this.state.firstName.value) {
            this.setState({ firstName: { ...this.state.firstName, errors: "Enter First Name" } });

        }
        else if (this.state.firstName.value.length < 3) {
            this.setState({ firstName: { ...this.state.firstName, errors: "First Name needs to be at least 3 characters" } });
        }
        else this.setState({ firstName: { ...this.state.firstName, errors: "" } });


        //Last Name Validation
        if (!this.state.lastName.value) {
            this.setState({ lastName: { ...this.state.lastName, errors: "Enter Last Name" } });

        }
        else if (this.state.lastName.value.length < 3) {
            this.setState({ lastName: { ...this.state.lastName, errors: "Last Name needs to be at least 3 characters" } });
        }
        else this.setState({ lastName: { ...this.state.lastName, errors: "" } });


        //Email validation
        if (!this.state.email.value) {
            this.setState({ email: { ...this.state.email, errors: "Enter Email" } });

        }
        else if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.value))) {
            this.setState({ email: { ...this.state.email, errors: "Enter a valid email adress" } });
        }
        else this.setState({ email: { ...this.state.email, errors: "" } });

        //Password validation
        if (!this.state.password.value) {
            this.setState({ password: { ...this.state.password, errors: "Enter password" } });
        }
        else if (!this.state.password.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            this.setState({ password: { ...this.state.password, errors: "Enter a strong password" } });

        }
        else this.setState({ password: { ...this.state.password, errors: "" } });

        //Check if password match
        if (this.state.confirmPassword.value !== this.state.password.value) {
            this.setState({ confirmPassword: { ...this.state.confirmPassword, errors: "Passwords do not match" } });
        }

        else this.setState({ confirmPassword: { ...this.state.confirmPassword, errors: "" } });

        let usersData = JSON.parse(localStorage.getItem('users')) || [];
        usersData.push({
            id: users.length + 1,
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value,
            password: this.state.password.value

        });


        localStorage.setItem('users', JSON.stringify(usersData));












    }
    render() {
        return (

            <form onSubmit={this.validateForm}>
                <div className="form-group row">
                    <div className="col-md-9 pt-3">
                        <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={(event) => this.handleUserInput(event)}></input>
                        <p className="text-danger">{this.state.firstName.errors}</p>
                    </div>

                    <div className="col-md-9">
                        <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={(event) => this.handleUserInput(event)}></input>
                        <p className="text-danger">{this.state.lastName.errors}</p>
                    </div>
                    <div className="col-md-9">
                        <input type="text" className="form-control" placeholder="Email" name="email" onChange={(event) => this.handleUserInput(event)}></input>
                        <p className="text-danger">{this.state.email.errors}</p>
                    </div>
                    <div className="col-md-9">
                        <input type="password" className="form-control" placeholder="Password" name="password" onChange={(event) => this.handleUserInput(event)}></input>
                        <p className="text-danger">{this.state.password.errors}</p>
                    </div>
                    <div className="col-md-9">
                        <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={(event) => this.handleUserInput(event)}></input>
                        <p className="text-danger">{this.state.confirmPassword.errors}</p>
                    </div>
                    <div className="col-md-9">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>

            </form>
        )
    }

}
