import React, { Component } from 'react'

export const CurrentUser = (props) => {
    return (
        <div>
            <p>User name:{this.props.name}</p>
            <button
                className="btn btn-default"
                onClick={() => this.props.setName("Maria")}
            >Edit User</button>

        </div>
    )

}
