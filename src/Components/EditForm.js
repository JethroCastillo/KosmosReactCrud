import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  //Set State
  const [field, setField] = useState(props.currentField);

  useEffect(() => {
    setField(props.currentField);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setField({ ...field, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.updateField(field._uid, field);
      }}
    >
      <div className="mb-5">
        <label>Label</label>
        <br />
        <input
          className="rounded p-3 text-pink-500 bg-gray-200"
          type="text"
          name="label"
          value={field.label}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <p>Component Option:</p>
        <div onChange={handleInputChange}>
          <input type="radio" name="component" value="text" />
          <label>Text</label>
          <br />
          <input type="radio" name="component" value="model" />
          <label>Model</label>
          <br />
          <input type="radio" name="component" value="other" />
          <label>Other</label>
        </div>
      </div>
      <div className="mb-5">
        <p>Type Option:</p>
        <select name="type" onChange={handleInputChange}>
          <option value="">none</option>
          <option value="Text">Text</option>
          <option value="Email">Email</option>
          <option value="Number">Number</option>
        </select>
      </div>

      <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
        Eddit Field
      </button>
      <button
        onClick={() => props.setEditing(false)}
        className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
