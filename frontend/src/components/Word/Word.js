import React from "react";
import "./Word.css"

//Actually, I think I want the date and the word outside of this component, so that I can reuse it in different contexts? IDK.
//need to be able to add multiple meanings, each with it's own part of speech, so include all those components here, and map the defs. 

function Word({ word, meanings, orthography}) {
    return (
        <div className="word">
            <p>
                <strong>{word}</strong>
            </p>
            <div className="types">
                {pronunciation} {partOfSpeech}
            </div>
            <div className="definitions">
                {meanings.defs.map()}
            </div>
            <div className="orthography">
                {orthography}
            </div>
        </div>
    );
}

export default Word;