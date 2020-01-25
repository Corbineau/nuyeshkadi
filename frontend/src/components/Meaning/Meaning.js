import React from "react";
 

function Meaning({key, partOfSpeech, pronunciation, def, tags, related, source, roots, notes}) {
    return (
        <div className="definition">
            <span id="pronunciation">"[{pronunciation}]"</span> <span id="wordMeanings"> {key}. <em>{partOfSpeech}</em> {def}</span>
            <div className="etymology">
                <p id="tagBox">
                    tags: <span id="tags">{tags}</span>
                </p>
                <p id="relatedBox">
                    related words: <span id="related">{related}</span><br />
                    etymological source: <span id="related">{source}</span><br />
                    root words: <span id="roots">{roots}</span>
                </p>
                <p id="notesBox">
                    notes: {notes}
                </p>
            </div>
        </div>
    );
}

export default Meaning;