import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Firstcomp  from './Firstcomp/FirstComp/FirstComp';
import { Rightcmp } from './Rightcmp';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
          <Firstcomp/>
          <Rightcmp/>
      </React.Fragment>
    );
  }
}

 
export  default App;


