import React, { Component } from 'react';
import './Wod.css';

class Wod extends Component {
    state = {
        date: new Date(),
    }

    /* FUNCTIONALITY
    * every day at midnight, get a word from the Yesh model 
    * if the word is not already in Tan for the current year, add it to Tan with today's date
    * render the word. 
    */

    componentDidMount() {
        //pull the word associated with the day. This should probably be a whole doc.
    }
    
    render() {



        return (
            <div className="content">
                <div id="word">
        
                </div>
              
              
            </div>
          );
    }
  
}

export default Wod;