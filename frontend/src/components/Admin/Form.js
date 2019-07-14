import React from "react";

function AddForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="word">Add:</label>
        <input
          onChange={props.handleInputChange}
          value={props.add}
          name="word"
          type="text"
          className="form-control"
          placeholder="Add a Word"
        />
        <input
          onChange={props.handleInputChange}
          value={props.pron}
          name="pronunciation"
          type="text"
          className="form-control"
          placeholder="pronunciation"
        />
        <input
          onChange={props.handleInputChange}
          value={props.pos}
          name="partOfSpeech"
          type="text"
          className="form-control"
          placeholder="part of speech"
        />
        <input
          onChange={props.handleInputChange}
          value={props.mean}
          name="meaning"
          type="text"
          className="form-control"
          placeholder="meaning"
        />
        <button onClick={props.handleFormSubmit} >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddForm;
