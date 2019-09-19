import React, { Component } from 'react';
import './Wod.css';

class Wod extends Component {
    state = {
        today, //state.today should be the real current day in either cron format maybe? dd-mm-yyyy
        // date: new Date(),
        thisday, //the day that is being displayed (for viewing old words)
        yesterday, // the day before thisday
        nextday, // the day after thisday
        tan: {},
    }

    /* FUNCTIONALITY
    * every day at midnight, get a word from the Yesh model 
    * if the word is not already in Tan for the current year, add it to Tan with today's date
    * render the word. 
    */

    componentDidMount() {
        //pull the word associated with the day from the tan model. This should probably be a whole doc.
    }

    getNewWord = function() {
        const day = state.today
        
    }

    render() {



        return (
            <div className="content">
                <div id="word">
                    <div id="showWord"> 
                    </div>
                    <div id="pronunciation">

                    </div>
                    <div id="meaning">

                    </div>
                    <div id="orthography">

                    </div>
                </div>


            </div>
        );
    }

}

export default Wod;