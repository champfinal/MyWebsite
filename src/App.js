import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Backgroundvid} from './backgroundvid';

class App extends React.Component{
  render(){
    return (<div className="App">
      <Header></Header>
      <Backgroundvid></Backgroundvid>
      </div>
    )
  }
}


export default App;
