import React, { Component } from 'react';
import './Wod.css';
import Word from '../Word/Word';
import Meaning from '../Meaning/Meaning';
import API from '../../utils/API';
const moment = require('moment');
const schedule = require('node-schedule');
const loc = window.location.pathname; //this should add the value of the route;


moment().format();

class Wod extends Component {
    state = {
        today: "", //is set when Component mounts.
        yesterday: "", // the day before today
        tomorrow: "", // the day after today
        tan: {
            date: "",
            word: {},
            rendering: ""
        }, //this may be overcomplicating things, actually. Let's refactor later tho.
        tanResult: {}
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
        if (loc === "/") {
            let now = moment();
            this.setState({
                today: moment().format("dddd, MMMM Do YYYY"),
                yesterday: now.clone().subtract(1, 'd').format("dddd, MMMM Do YYYY")
            }, () => {
                console.log(this.state);
                API.getTan(now.format("MM-DD-YYYY")).then(res => {
                    if (res) {
                        this.setState({
                            tanResult: res.data,
                            tan: {
                                word: res.data.word,
                                rendering: res.data.orthography,
                            }
                        });
                        console.log(this.state.tan, this.state.tanResult);
                    } else {
                        this.getNewWord();
                        console.log(this.state.tan, this.state.tanResult);
                    }
                })
            })
        } else if(this.validatedate(loc)) { 
            let now = moment(loc.split("/"), "MM-DD-YYYY");
            console.log(loc);
            this.setState({
                today: now.format("dddd, MMMM Do YYYY"),
                yesterday: now.clone().subtract(1, 'd').format("dddd, MMMM Do YYYY"),
                tomorrow: now.clone().add(1, 'd').format("dddd, MMMM Do YYYY")
            }, () => {
                API.getTan(now).then(res => {
                    this.setState({
                        tanResult: res.data
                    })
                });
            });
        } else {
            // loc.split("/");
            let now = moment();
            this.setState({
                today: moment().format("dddd, MMMM Do YYYY"),
                yesterday: now.clone().subtract(1, 'd').format("dddd, MMMM Do YYYY")
            }, () => {
                console.log(this.state);
                API.getTan(now.format("MM-DD-YYYY")).then(res => {
                    if (res) {
                        this.setState({
                            tanResult: res.data,
                            tan: {
                                word: res.data.word,
                                rendering: res.data.orthography,
                            }
                        });
                        console.log(this.state.tan, this.state.tanResult);
                    } else {
                        this.getNewWord();
                        console.log(this.state.tan, this.state.tanResult);
                    }

                }
                )
            }

            )
            
        }
    } 

    validatedate = function (inputText) {
        const dateformat = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, 'g');
        // Match the date format through regular expression
        if (inputText.match(dateformat)) { 
            return true;
        };
    }

    //pull the word associated with the day from the tan model. This should probably be a whole doc.

    runJob = function () { schedule.scheduleJob('0 0 */1 * *', this.getNewWord()) };
    //need to verify this will run even if the component doesn't load. May need to live on the app.

    getNewWord = function () {
        //find a word that isn't already in Tan, put it in Tan associated with today's date
        API.getRandomWord()
            .then(rand => {
                const random = rand.data;
                API.getWord(random)
                    .then(res => {
                        if (res) {
                            console.log("already there, trying again");
                            this.runJob();
                        } else {
                            console.log(`no match! Saving ${random}`, res.data);
                            this.setState({
                                tan: {
                                    date: moment.format(),
                                    word: res.data,
                                    rendering: res.data.orthography
                                }
                            })
                            API.createTan(res.data)
                        }
                    })
            })
    };

    render() {
        return (
            <div className="content">
                
                <div id="title">
                {this.state.tan.word.word || "elev"}
                </div>
                <div id="dates">
                    <span>{this.state.yesterday} | {this.state.today} | {this.state.tomorrow}</span>
                </div>
                
                <div id="word" className="renderWord">
                    <Word
                        orthography={this.state.tan.rendering || "elev"}
                    // meanings={this.state.tanResult.defintions.map(def => (
                    //     <Meaning
                    //         key={def.key || 1}
                    //         partOfSpeech={def.partOfSpeech || "noun" }
                    //         pronunciation={def.pronunciation || ""}
                    //         def={def.meaning || ""}
                    //         tags={`${def.sorters.qualities}` || "" } //need to dump array contents here
                    //         related={def.etymology.relatedWords} //map
                    //         source={def.etymology.source} //map
                    //         roots={def.etymology.roots} //map
                    //         notes={def.notes} //...map?
                    //     /> ))}
                    />


                </div>


            </div>
        );
    }

}

export default Wod;