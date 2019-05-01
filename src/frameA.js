import React, { Component } from 'react';
import './App.css';

export default class FrameA extends Component {
    render() {
        return <div>{this.props.text}</div>;
    }
}
