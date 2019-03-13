import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Form(props) {
  return (
    <div class="container">
    <div class="card">
        <div class="card-content">
            <div class="field">

                <label class="label">Search for Books</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Book Name" {...props} />
                </div>
                <br />
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
              
            </div>
        </div>
    </div>
    <br />
    </div>
  );
}

export default Form;