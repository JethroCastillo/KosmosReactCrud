import React, { useState } from "react";

const AddfieldForm = (props) => {
  // Set State
  const initFormState = { _uid: null, label: "", type: "", component: "" };
  const [field, setField] = useState(initFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setField({ ...field, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!field.label || !field.type) return;

        props.addField(field);
        setField(initFormState);
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
        <select name="type" onChange={handleInputChange}>
          <option value="Text">Text</option>
          <option value="Email">Email</option>
          <option value="Number">Number</option>
        </select>
      </div>

      <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
        Add new Field
      </button>
    </form>
  );
};

export default AddfieldForm;
