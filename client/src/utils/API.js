import axios from "axios";

export default {
  // Gets all words
  getWords: function () {
    return axios.get("/api/yesh");
  },
  getRandomWord: function () {
    return axios.get("api/yesh/random");
  },
  //search for all results by word
  getWord: function (word) {
    return axios.get(`/api/yesh/${word}`);
  },
  // Get all words that match the full range of sorter terms. Needs updating badly.
  wordSearch: function (type, term) {
    return axios.get(`/api/yesh?type=${type}term=${term}`);
  },
  // Deletes the word with the given id
  deleteWord: function (id) {
    return axios.delete(`/api/yesh/${id}`);
  },
  // Saves a word to the database
  saveWord: function (wordData) {
    return axios.post(`/api/yesh/`, wordData);
  },
  //add an updater for the Yesh DB here, so more meanings can be added or whatever.

  //fetches a word for the given date, in MM-DD-YYYY format.
  getTan: function (date) {
    return axios.get(`/api/tan/${date}`);
  },
  //searches Tan to see if there's a word match
  getToday: function (yeshi) {
    return axios.get(`/api/tan/${yeshi}`);
  },
  //adds a new word to the Tan database on a schedule
  createTan: function (tanData) {
    return axios.post(`/api/tan/`, tanData);
  },
  //updates Tan if there are changes to a word that exists already, to be used programmatically
  updateTan: function(newData) {
    return axios.put(`/api/tan`, newData);
  }
};