import React from 'react';
import './theHead.css';
require('typeface-tangerine');


function TheHead() {
  return (
    <nav>
      <div className="navset">
            <a href="/index">Word of the Day</a>  |  <a href="/Admin">Admin</a> 

      </div>
    </nav>

  );
}

export default TheHead;