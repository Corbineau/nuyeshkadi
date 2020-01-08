import axios from "axios";

export default {
  // Gets all words
  getWords: function() {
    return axios.get("/api/yesh");
  },
  getRandomWord: function(){
    return axios.get("api/yesh/random");
  },
  //search for all results by word
  getWord: function(word) {
    return axios.get(`/api/yesh/${word}`);
  },
  // Get all words that match the full range of sorter terms. Needs updating badly.
  wordSearch: function(type, term) {
    return axios.get(`/api/yesh?type=${type}term=${term}`);
  },
  // Deletes the word with the given id
  deleteWord: function(id) {
    return axios.delete(`/api/yesh/${id}`);
  },
  // Saves a word to the database
  saveWord: function(wordData) {
    return axios.post(`/api/yesh/`);
  },
  //add an updater for the Yesh DB here, so more meanings can be added or whatever.
  getTan: function(date) {
      return axios.get(`/api/tan/${date}`)
  }
};