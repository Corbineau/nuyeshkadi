import React from 'react';
import './theHead.css';
require('typeface-tangerine');

//ultimately, I'm going to want to hide the admin link if the user is not logged in-- so isn't like, me or Jaguar.

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