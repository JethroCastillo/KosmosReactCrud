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
        <label>Component</label>
        <br />
        <input
          className="rounded p-3 text-pink-500 bg-gray-200"
          type="text"
          name="component"
          value={field.component}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <label>Type</label>
        <br />
        <input
          className="rounded p-3 text-pink-500 bg-gray-200"
          type="text"
          name="type"
          value={field.type}
          onChange={handleInputChange}
        />
      </div>

      <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
        Add new Field
      </button>
    </form>
  );
};

export default AddfieldForm;
