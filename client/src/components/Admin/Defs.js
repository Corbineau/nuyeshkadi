import React from "react";
import { Formik } from "formik";
import './Admin.css';

function Defs({}) {
    <Formik
        initialValues={{}}
    
    ></Formik> 
    return (<div classname="definition">
        <Input
            value={this.state.pronunciation}
            onChange={this.handleStateChange}
            name="newWord.pronunciation"
            placeholder="enter pronunciation"
        />
        <select
            value={this.state.partOfSpeech}
            onChange={this.handleStateChange}
            name="newWord.partOfSpeech"
            placeholder="select Part of Speech"
        >
            <option value="noun">noun</option>
            <option value="verb">verb</option>
            <option value="adjective">adjective</option>
            <option value="conjunction">conjunction</option>
            <option value="pronoun">pronoun</option>
            <option value="adverb">adverb</option>
            <option value="article">article</option>
            <option value="pragmatic">pragmatic</option>
            <option value="preposition">preposition</option>
            <option value="affix">affix</option>
            <option value="infix">infix</option>
            <option value="suffix">suffix</option>
        </select>
        <TextArea
            value={this.state.meaning}
            onChange={this.handleStateChange}
            name="newWord.meaning"
            placeholder="enter definition"
        />
        <p>Sorters:</p>
        <Input
            value={this.state.newWord.definitions.sorters.category}
            onChange={this.handleStateChange}
            name="newWord.category"
            placeholder="enter category"
        />
        <Input
            value={this.state.sorters.qualities}
            onChange={this.handleStateChange}
            name="newWord.qualities"
            placeholder="enter qualities"
        />
        <Input
            value={this.state.sort}
            onChange={this.handleStateChange}
            name="newWord.sort"
            placeholder="enter sort"
        />
    </div>

    );
}

export default Defs;