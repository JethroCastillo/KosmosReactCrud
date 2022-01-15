const fieldView = props => (

    <div className="views-field">
        {props.fields.length > 0 ? (
        props.fields.map((field) => (
          <div key={field._uid}>
            <p>UID: {field._uid}</p>              
            <p>Label: {field.label}</p>
            <p>Component: {field.component}</p>
            <p>Type: {field.type}</p>
            <div>
              <button
                onClick={() => {
                  props.editRow(field);
                }}
                className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5
              n"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteField(field._uid)}
                className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div>No fields</div>
        </div>
      )}
    </div>
)

export default fieldView