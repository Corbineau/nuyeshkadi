import React from 'react';
import './theHead.css';

function TheHead() {
  return (
    <nav>
      <div className="navset">
        <div className="navbox">
          <ul className="navlist">
            <li><a href="/index">Word of the Day</a> </li> |
                <li><a href="/Admin">Admin</a> </li> |
            </ul>
        </div>
      </div>
    </nav>

  );
}

export default TheHead;