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
          value={props.add}
          name="search"
          type="text"
          className="form-control"
          placeholder="Add a Word"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.add}
          name="search"
          type="text"
          className="form-control"
          placeholder="Add a Word"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddForm;
