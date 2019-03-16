import React from "react";

// This component lets us use a bootstrap input element without worrying about className names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Form(props) {
  return (
    <div className="container">
    <div className="card">
        <div className="card-content">
            <div className="field">

                <label className="label">Search for Books</label>
                <div className="control">
                    <input className="input" type="text" placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange}  />
                </div>
                <br />
                <div className="control">
                    <button className="button is-link" onClick={props.onClick}>Submit</button>
                </div>
              
            </div>
        </div>
    </div>
    <br />
    </div>
  );
}

export default Form;