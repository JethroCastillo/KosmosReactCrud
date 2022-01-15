import { useState, Fragment } from "react";
import "./App.css";

import FieldView from "./Components/fieldView";
import AddFieldForm from "./Components/FieldForm";
import EditForm from "./Components/EditForm";

function App() {

  // Data List JSON:
  const fieldsData = [
    {
      _uid: "Fe15asd",
      component: "Some",
      label: "first name",
      type: "Input",
    },
    {
      _uid: "Fe15asd123",
      component: "text",
      label: "Second name",
      type: "text",
    },
  ];

  // Data Schema
  const initForm = { _uid: null, component: "", label: "", type: "" };

  // Set State
  const [fields, setFields] = useState(fieldsData);
  const [currentField, setCurrentField] = useState(initForm);
  const [editing, setEditing] = useState(false);

  // CRUD Operators

  const addField = (e) => {

    const randomID = (Math.random() * 100).toString(36).substring(2, 9);
    e._uid = randomID
    setFields([...fields, e]);
  };

  const deleteField = (id) => {
    setEditing(false);

    setFields(fields.filter((field) => field._uid !== id));
  };

  const updateField = (id, updatedField) => {
    setEditing(false);

    setFields(
      fields.map((fields) => (fields._uid === id ? updatedField : fields))
    );
  };

  // Function to set teh dataform in the fields camps
  const editRow = (field) => {
    setEditing(true);

    setCurrentField({
      _uid: field._uid,
      label: field.label,
      component: field.component,
      type: field.type
    });
  };

  // Views
  return (
    <div className="container">
      <h1 className="flex justify-center" >APP Kosmos</h1>
      <div className="grid gap-auto grid-cols-2">
        <div className="col mx-auto">
        <h1 className="flex justify-center" >Form Section</h1>
          <div className="grid">
            {editing ? (
              <Fragment>
                <h2>Edit Field</h2>
                <br />

                <EditForm
                  editing={editing}
                  setEditing={setEditing}
                  currentField={currentField}
                  updateField={updateField}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add newField</h2>
                <br />

                <AddFieldForm addField={addField} />
              </Fragment>
            )}
          </div>
        </div>

        <div className="col">
        <h1 className="flex justify-center" >Fields</h1>
          <FieldView
            fields={fields}
            editRow={editRow}
            deleteField={deleteField}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
