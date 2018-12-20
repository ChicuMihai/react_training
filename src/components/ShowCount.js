import React, { Component } from 'react'

export default class ShowCount extends Component {
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
            </div>
        )
    }
}
