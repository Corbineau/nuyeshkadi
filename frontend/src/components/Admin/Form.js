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
          id="word"
        />
        <input
          onChange={props.handleInputChange}
          value={props.pron}
          name="pronunciation"
          type="text"
          className="form-control"
          placeholder="pronunciation"
          id="pronunciation"
        />
        <input
          onChange={props.handleInputChange}
          value={props.pos}
          name="partOfSpeech"
          type="text"
          className="form-control"
          placeholder="part of speech"
          id="pos"
        />
        <input
          onChange={props.handleInputChange}
          value={props.mean}
          name="meaning"
          type="text"
          className="form-control"
          placeholder="meaning"
          id="meaning"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddForm;
