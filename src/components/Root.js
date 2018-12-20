import React, { Component } from 'react'
import Header from './Header';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>


            </div>
        )
    }
}
