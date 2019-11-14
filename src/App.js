import React from 'react';
import './App.css';
import {Header} from './Header';
import {Backgroundvid} from './backgroundvid';
import {About} from './About';
import {Gallery} from './Gallery';


class App extends React.Component{
  render(){
    return (<div className="App">
      <Header></Header>
      <Backgroundvid></Backgroundvid>
      <About></About>
      <Gallery></Gallery>
      </div>
    )
  }
}


export default App;
