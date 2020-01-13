import React, { Component } from 'react';
import './Wod.css';
import API from '../../utils/API';
const schedule = require('node-schedule');
const loc = //this should add the value of the route;


class Wod extends Component {
    state = {
        today: "", //is set when Component mounts.
        thisday: "", //the day that is being displayed (for viewing old words) -- may not need this
        yesterday: "", // the day before thisday
        nextday: "", // the day after thisday
        tan: {
            date: "",
            word: {},
            rendering: ""
        },
    }

    /* FUNCTIONALITY
    * every day at midnight, get a word from the Yesh model 
    * if the word is not already in Tan for the current year, add it to Tan with today's date
    * render the word. 
    */

    componentDidMount() {
        //put all of the below in an if statement based on the route
        let now = new Date();
        this.setState({
            today: now.toISOString(),
            yesterday: now.getDate() - 1,
            tomorrow: now.getDate() +1
        }, () => {
            API.getTan(this.state.today);
            console.log(this.state.today);
        });
       

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
                            this.setState({
                                tan : {
                                    word: res,
                                    rendering: res.orthography
                                }
                            })
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
                        <p>
                        {}
                        </p>
                    </div>
                    <span id="pronunciation">
                        <p>
                            {}
                        </p>
                    </span>
                    <div id="meaning">
                        <p>
        meaning: <span id="wordMeanings"> </span>
                        </p>
                    </div>
                    <div id="orthography" className="orthography">
                        <p>
                            {this.state.tan.rendering || "min!"}
                        </p>
                    </div>
                </div>


            </div>
        );
    }

}

export default Wod;