import React from "react";

const PersonForm = ({ submitPerson, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={submitPerson}>
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
