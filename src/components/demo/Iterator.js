import React, { Component } from 'react'

export default class Iterator extends Component {
    constructor() {
        super();
        console.log('Constructor');

    }
    componentWillMount() {
        console.log('Component will mount');
    }
    componentWillReceiveProps(nextProps) {
        console.log('Components will recive props', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.count <= 10;

    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update', prevProps, prevState);
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }
    render() {
        return (

            <button className="btn btn-primary" onClick={this.props.onclick}>Increment</button>

        )
    }
}
