import React from 'react';
import './Header.css'

export class Header extends React.Component{
    render(){
        return (<div className="App">
          <header className="Header">
            <ul className="HeaderLinks">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </header>
          </div>)
    }
}

