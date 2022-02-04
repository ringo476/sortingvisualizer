import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Firstcomp  from './Firstcomp/FirstComp/FirstComp';
import Bubbleinfo from './Sortinginfo/Bubbleinfo/Bubbleinfo.jsx'
import Insertioninfo from './Sortinginfo/Insertioninfo/Insertioninfo.jsx'
import Mergeinfo from './Sortinginfo/Mergeinfo/Mergeinfo.jsx'
import { Route,Routes } from 'react-router-dom';
import { Rightcomp } from './Rightcomp/Rightcomp';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
          <Firstcomp/>
          <Routes>
            <Route exact path="/m" element={<Mergeinfo/>}/>
            <Route exact path="/i" element={<Insertioninfo/>}/>
            <Route exact path="/b" element={<Bubbleinfo/>}/>
            <Route exact path="/" element={<Rightcomp/>}/>
          </Routes>
      </React.Fragment>
    );
  }
}

 
export  default App;


