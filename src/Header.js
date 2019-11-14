import React from 'react';
import './Header.css'

export class Header extends React.Component{
    render(){
        return (
          <div>
          <header className="Header">
              <img src="https://cdn0.iconfinder.com/data/icons/shopping-and-commerce-4-4/48/168-512.png" alt="Controller"></img>
            <ul className="HeaderLinks">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
            <div className="ProgressContainer">
            <div className="ProgressBar" id="myBar"></div>
          </div>
          </header>
          </div>
          )
    }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

