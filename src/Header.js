import React from 'react';
import './Header.css'

export class Header extends React.Component{
    render(){
        return (
          <header className="Header">
              <img src="https://cdn0.iconfinder.com/data/icons/shopping-and-commerce-4-4/48/168-512.png" alt="Controller"></img>
            <ul className="HeaderLinks">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </header>
          )
    }
}


