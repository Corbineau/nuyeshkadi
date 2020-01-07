import React, { Component } from 'react';
import './Wod.css';
import API from '../../utils/API';
const schedule = require('node-schedule');

class Wod extends Component {
    state = {
        today: "", //state.today should be the real current day in either cron format maybe? dd-mm-yyyy
        // date: new Date(),
        thisday: "", //the day that is being displayed (for viewing old words)
        yesterday: "", // the day before thisday
        nextday: "", // the day after thisday
        tan: {},
    }

    /* FUNCTIONALITY
    * every day at midnight, get a word from the Yesh model 
    * if the word is not already in Tan for the current year, add it to Tan with today's date
    * render the word. 
    */

    componentDidMount() {

        API.getTan(this.state.today)
        //pull the word associated with the day from the tan model. This should probably be a whole doc.
    }

    
    getNewWord = function() {
        const runJob = schedule.scheduleJob('0 0 */1 * *', () => {
            API.getWord()
            //find a word that isn't already in Tan, put it in Tan associated with today's date
        });     } 

    render() {
        return (
            <div className="content">
                <div id="word">
                    
                    <div id="showWord"> 
                    </div>
                    <span id="pronunciation">

                    </span>
                    <div id="meaning">
                        <p>
                            meaning: <span id="wordMeaning"></span>
                        </p>
                    </div>
                    <div id="orthography">

                    </div>
                </div>


            </div>
        );
    }

}

export default Wod;