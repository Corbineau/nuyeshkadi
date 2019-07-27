import axios from "axios";

export default {
  // Gets all words
  getWords: function() {
    return axios.get("/api/yesh");
  },
  // Get all words that match terms
  getWord: function(type, term) {
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
  getTan: function(date) {
      return axios.get(`/api/tan/${date}`)
  }
};