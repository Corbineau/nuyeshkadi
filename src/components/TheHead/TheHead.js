import React from 'react';
import './theHead.css';

function TheHead() {
  return (
    <nav>
        <div className="navset">
        <div id="name">
            <h1>Rabbit Stoddard</h1>
        </div>
        <div className="navbox">
            <ul className="navlist">
                <li><a href="/index">About Me</a> </li> |
                <li><a href="/portfolio">Portfolio</a> </li> |
                <li><a href="/contact">Contact</a> </li>
            </ul>
        </div>
    </div>
    </nav>

  );
}

export default TheHead;