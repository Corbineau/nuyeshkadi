import React, { Component } from 'react';
import './Wod.css';
import API from '../../utils/API';
const schedule = require('node-schedule');


class Wod extends Component {
    state = {
        today: "", //is set when Component mounts.
        thisday: "", //the day that is being displayed (for viewing old words) -- may not need this
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
        let now = new Date();
        //update the state to today's date; this value should match whatever is stored in Tan, since it's gonna be a search term
        this.setState({
            today: now.toISOString(),
            yesterday: now.getDate() - 1,
        });
        API.getTan(this.state.today);
        console.log(this.state.today);

    }
    //pull the word associated with the day from the tan model. This should probably be a whole doc.

    runJob = function () { schedule.scheduleJob('0 0 */1 * *', this.getNewWord()) };

    getNewWord = function () {
        API.getRandomWord()
            .then(rand => {
                const random = rand;
                API.getWord(random)
                    .then(res => {
                        if (res) {
                            console.log("already there, trying again");
                            this.runJob();
                        } else {
                            console.log(`no match! Saving ${random}`);
                        }
                    })
            })
        //find a word that isn't already in Tan, put it in Tan associated with today's date
    };

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