import React from 'react'
function Form(props){
    return (
      <>
          <div className="ui placeholder segment">
            <form className="ui form" onSubmit={props.updateProject}>
              <div className="field">
                <label htmlFor="project_name">Review Text: </label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    id="project_name"
                    name={props.project}
                    onChange={props.changeHandler}
                    defaultValue={props.project}
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