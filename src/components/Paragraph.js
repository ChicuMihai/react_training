import React, { Component } from 'react'

export default class Paragraph extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
