import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexi from './DynamicForm';

export default class App extends Component {
    constructor(props) {
      super(props);
    }
  render() {
    return (
      <div className="App">
        <Flexi onSubmit = {this.onFlexiSubmit}/>
      </div>
    );
  }
}


