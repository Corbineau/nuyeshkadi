import React from "react";
import "./Word.css"

function Word({ word_of_day, date }) {
    return (
        <div className="review">
            <strong>{word_of_day}</strong> -- {date}
            <div>{review_text}</div>
        </div>
    );
}

export default ReviewCard;