import React, { Component } from 'react';
// import axios from 'axios';
import { Input, TextArea, FormBtn } from './Form'
import './Admin.css';
import API from '../../utils/API';

class Admin extends Component {
  state = {
    data: [],
    search: {
      searchType: "",
      searchTerm: ""
    },
    newWord: {
      word: "",
      definitions: [
        {
          key: 0,
          pronunciation: "",
          partOfSpeech: "",
          meaning: "",
          sorters: {
            category: [],
            qualities: [],
            sort: []
          },
          etymology: {
            source: "",
            relatedWords: [],
            roots: []
          },
        }
      ],
      orthography: ""
    },
    newDef: {
      partOfSpeech: "",
          meaning: "",
          sorters: {
            category: [],
            qualities: [],
            sort: []
          },
          etymology: {
            source: "",
            relatedWords: [],
            roots: []
          },
    }
  };

  // when component mounts, do some damn thing.
  // componentDidMount() {
  //   // this.getDataFromDb();

  // }


  handleStateChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log(this.state);
  }

  handleWordSubmit = event => {
    event.preventDefault();
    this.addWord();
    console.log(this.state);
  };


  handleSearchSubmit = event => {
    event.preventDefault();
    this.getWords();
    console.log(this.state);
  };

  getWords = () => {
    let search = this.state.search;
    //when calling this function, searchType should pass what db field to search, and searchTerm will specify the term.
    API.getWords(search.searchType, search.searchTerm)
      .then(result => result.json())
      .then(res => this.setState({ data: res.data }))
  }

  addWord = () => {
    let word = this.state.newWord;


  }

  addAdditionalDef = () => {
    //respond to a buttonclick to add a new definition form element... this is gonna have to be a new component ><
    //set/incriment the key value on the click
    //take the form elements for the new definition and push it to the definitions array in the current word
    let newDef = this.state.newDef;
    this.state.newWord.definitions.push(this.state.newDef);


  }



  render() {

    return (
      <div id="newForm">
        <Input
          value={this.state.word}
          onChange={this.handleStateChange}
          name="newWord.word"
          placeholder="enter a new word"
        />
        
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
        </select>
        <TextArea
          value={this.state.meaning}
          onChange={this.handleStateChange}
          name="newWord.meaning"
          placeholder="enter definition"
        />
        <FormBtn
          onClick={this.handleWordSubmit}
          value="submit"
        >
          submit
          </FormBtn>

        <select name="search.searchType"
          value={this.state.searchType}
          onChange={this.handleStateChange}>
          <option value="yesh">Ai-Naidar word</option>
          <option value="sort">English word</option>
          <option value="pos">Part of Speech</option>
        </select>
        <Input name="search.searchTerm"
          onChange={this.handleStateChange}
          value={this.state.searchTerm}
          placeholder="search for a word here"
        />
        <FormBtn
          onClick={this.addAdditionalDef}
          value=""
          >
          Add a new definition
        </FormBtn>
        <FormBtn
          onClick={this.handleSearchSubmit}
          value="submit"
        >
          search
        </FormBtn>
        <div className="searchResults">
          Search Results will go here.
        </div>
      </div>
    )
  }
}



export default Admin;