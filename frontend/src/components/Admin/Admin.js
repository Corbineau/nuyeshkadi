import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'
import './Admin.css';

class Admin extends Component {
state = {
    data: [],
    newWord: {}
  };

  // when component mounts, do some damn thing.
  componentDidMount() {
    // this.getDataFromDb();
    
  }


  handleStateChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleWordSubmit = newWord => {
    event.preventDefault();
    this.addWord(this.state.newWord);
  };



  getAword = (search) => {
    fetch('/api/search')
    .then((result => result.json()))
    .then((res) => this.setState({ data: res.data}))
  }

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };


  render() {
    
    return (
      <div>
        <Form />
        </div>
    )
  }
}



export default Admin;