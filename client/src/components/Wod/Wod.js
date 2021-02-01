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
            word: "",
            yeshid: "",
            rendering: ""
        },
        tanResult: {
            definitions: [
                {
                key: 0,
                partOfSpeech: "noun",
                pronunciation: "[eh LEHV]",
                meaning: "Benefit of the Doubt"
                }
            ]
        }
    }

    /* FUNCTIONALITY
    * every day at midnight, get a word from the Yesh model 
    * if the word is not already in Tan for the current year, add it to Tan with today's date
    * render the word. 
    */

    componentDidMount() {
        console.log(loc);
        if ((loc !== "/") && (Date.parse(loc) !== isNaN)) {
            let now = moment(loc.split("/"), "MM-DD-YYYY");
            console.log(loc, now);
            this.setState({
                today: now.format("dddd, MMMM Do YYYY"),
                yesterday: now.clone().subtract(1, 'd').format("dddd, MMMM Do YYYY"),
                tomorrow: now.clone().add(1, 'd').format("dddd, MMMM Do YYYY")
            }, () => {
                console.log(now);
                API.getTan(loc).then(res => {
                    this.setState({
                        tan: {
                            date: res.data.date,
                            word: res.data.word,
                            rendering: res.data.rendering,
                        }
                    }); // add error handling for old dates.
                });
            });
        } else {
            let now = moment();
            this.setState({
                today: now.format("dddd, MMMM Do YYYY"),
                yesterday: now.clone().subtract(1, 'd').format("dddd, MMMM Do YYYY")
            }, () => {
                console.log(this.state);
                let day = now.format("MM-DD-YYYY");
                console.log(day);
                API.getTan(day) //this is an object, may need to stringify
                    .catch(err => {
                        console.log(this.state.tan, this.state.tanResult, err);
                    }).then(res => {
                        if (res.data.length > 0) {
                            console.log(res);
                            this.setState({
                                tan: {
                                    date: res.data.date || now,
                                    yeshid: res.data.yeshid,
                                    word: res.data.word || "elev",
                                    rendering: res.data.rendering || "elev",
                                }
                            });
                            console.log(res);
                            try {
                                this.getVetanel(this.state.word);
                                console.log(this.state.word);
                            } catch (err) {
                                console.log(err)
                            }
                            console.log(this.state.tan, this.state.tanResult);
                        } else {
                            this.getNewWord();
                            console.log(this.state.tan, this.state.tanResult);
                        }
                    })
                    
        }
            )}
    }

    runJob = function () { schedule.scheduleJob('0 0 */1 * *', this.getNewWord()) };
    //need to verify this will run even if the component doesn't load. May need to live on the app. Also, consider pre-populating the year, and having a manual way to do so. 

    getVetanel = function (yeshi) {
        //pull the word data from the Yesh db, using a find.
        API.getWord(yeshi).then(res => {
            console.log("searching for "  + yeshi + res);
            this.setState({
                tan: {
                    word: res.data.word,
                    rendering: res.data.orthography
                },
                tanResult: res.data || {
                    definitions: [
                        {
                        partOfSpeech: "noun",
                        pronunciation: "[eh LEHV]",
                        meaning: "Benefit of the Doubt"
                        }
                    ]
                }
            })
        })
    };

    getNewWord = function () {
        //find a word that isn't already in Tan, put it in Tan associated with today's date
        API.getRandomWord() // getting a 304 for every fetch. BLEH
            .then(rand => {
                console.log(rand);
                const random = rand.data;
                API.getToday(random.word)
                    .then(res => {
                        if (res) {
                            console.log("already there, trying again");
                            this.runJob();
                        } else {
                            console.log(`no match! Saving ${random}`, res.data);
                            this.setState({
                                tan: {
                                    date: moment.format(),
                                    word: res.data.word,
                                    rendering: res.data.orthography
                                }
                            })
                            API.createTan(this.state.tan);
                        }
                    })
            })
    };

    render() {
        return (
            <div className="content">

                <div id="title">
                    {this.state.tan.word || "Eker"}
                </div>
                <div id="dates">
                    <span>{this.state.yesterday} | {this.state.today} | {this.state.tomorrow}</span>
                </div>

                <div id="word" className="renderWord">
                    <Word
                        orthography={this.state.tan.rendering || "eker"}
                    meanings={this.state.tanResult.definitions ? this.state.tanResult.definitions.map(def => (
                        <Meaning
                            partOfSpeech={def.partOfSpeech }
                            pronunciation={def.pronunciation }
                            def={def.meaning }
                            // tags={`${def.sorters.qualities}`} //need to dump array contents here
                            // related={def.etymology.relatedWords} //map
                            // source={def.etymology.source} //map
                            // roots={def.etymology.roots} //map
                            // notes={def.notes} //...map?
                        /> )) : "sigh."}
                    />


                </div>


            </div>
        );
    }

}

export default Wod;