import React, { Component } from 'react'
import { users } from './Home';
export default class User extends Component {
    filterUsers(id) {

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return users[i];
            }
        }

    }
    render() {


        return (

            <div>
                <h3>The User Page</h3>

                <p>User ID:{this.props.match.params.id}</p>
                <p> First Name:{this.filterUsers(this.props.match.params.id).firstName}</p>
                <p> Last Name:{this.filterUsers(this.props.match.params.id).lastName}</p>
            </div>
        )
    }
}

