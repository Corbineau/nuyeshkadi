import axios from "axios";

export default {
  // Gets all words
  getWords: function() {
    return axios.get("/api/yesh");
  },
  // Get a word
  getWord: function(id) {
    return axios.get(`/api/yesh/${id}`);
  },
  // Deletes the word with the given id
  deleteWord: function(id) {
    return axios.delete(`/api/yesh/${id}`);
  },
  // Saves a word to the database
  saveWord: function(wordData) {
    return axios.post(`/api/yesh/${id}`);
  },
  getWod: function(date) {
      return axios.get(`/api/tan/${date}`)
  }
};