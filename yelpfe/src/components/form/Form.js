import React from 'react';
import './form.css';
function Form(props){
  console.log("form props are", props.projects)
    return (
      <>
          <div className="form-wrapper">
            <form className="form" onSubmit={props.updateProject}>
              <div className="field">
                <label className="label" htmlFor="project">Review Text: </label>
                <div className="ui left icon input">
                  <input
                    className="input-text"
                    type="text"
                    id="review"
                    name={props.projects.review}
                    onChange={props.changeHandler}
                    defaultValue={props.projects.review}
                    // disabled={props.disabled}
                  />
                  <i aria-hidden="true" className="briefcase icon" />
                </div>
              </div>
              <div className="container">
                <button className="ui red button" type="submit">
                  Submit
                </button>
                {/* <button className="ui red button" onClick={this.deleteProject}>
                  Delete
                </button> */} 
              </div>
            </form>
          </div>
      </>
    );
}

export default Form;