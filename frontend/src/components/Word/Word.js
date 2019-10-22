import React from "react";
import "./Word.css"

//Actually, I think I want the date and the word outside of this component, so that I can reuse it in different contexts? IDK.

function Word({ yesh, meaning, pronunciation, partOfSpeech}) {
    return (
        <div className="word">
            <p>
                <strong>{yesh}</strong>
            </p>
            <div className="types">
                {pronunciation} {partOfSpeech}
            </div>
            <div className="meaning">
                {meaning}
            </div>
        </div>
    );
}

export default Word;