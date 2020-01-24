import React, { Component } from 'react';
import './Wod.css';
import Word from '../Word/Word';
import API from '../../utils/API'
const moment = require('moment');
const schedule = require('node-schedule');
const loc = window.location.pathname.split("/"); //this should add the value of the route;


moment().format();

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

//    res.data.forEach(review => {
//     let newDate = review.date.split("T")[0];
//       review.date = newDate;
//     });

    componentDidMount() {
        console.log(loc);
        if(loc === "/") {
            // let now = moment();
        this.setState({
            today: moment().format("dddd, MMMM Do YYYY"),
            yesterday: this.state.today -1,
        }, () => {
            API.getTan(this.state.today) //add error handling here;
            console.log(this.state.today);
        });
        } else {
            let now = moment(loc, "MM-DD-YYYY");
            console.log(loc);
            this.setState({
                today: now.format("dddd, MMMM Do YYYY"),
                yesterday: now.clone().subtract(1, 'd').format("dddd, MMMM Do YYYY"),
                tomorrow: now.clone().add(1, 'd').format("dddd, MMMM Do YYYY")}, () => {
                    API.getTan(now); //add a try/catch here
                    console.log(now);
                });
            }}

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
                <div id="dates">
    <span>{this.state.yesterday} | {this.state.today} | {this.state.tomorrow}</span>
                </div>
                <div id="word">
                    <Word>
                        
                    </Word>
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
        definitions: <span id="wordMeanings"> </span>
                        </p>
                    </div>
                    <div id="orthography" className="orthography">
                        <p>
                            {this.state.tan.rendering || "min"}
                        </p>
                    </div>
                </div>


            </div>
        );
    }

}

export default Wod;