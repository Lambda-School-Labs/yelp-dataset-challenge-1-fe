// <!-- svg -->
//                 <svg width="100%" height="100%" class="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><circle class="circle-chart-background" stroke="#efefef" stroke-width="3" fill="none" cx="21" cy="21" r="15.91549431"></circle><circle class="circle-chart-circle" stroke="#ffec26" stroke-width="3" stroke-dasharray="65,100" stroke-linecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle><g class="gpa-text"><text x="50%" y="50%" class="chart-label">Health</text><text x="50%" y="50%" class="chart-number">65%</text></g></svg>
import React, { Component } from "react";
import { connect } from 'react-redux';
import Prediction from "../components/prediction/prediction";
import Form from "../components/form/Form"
import { updateProjectInfo } from '../store/actions';

import "./dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          disabled: false,
          project:[],
          review: 'das me',
          Total: 37,
          Helpful: 15,
          Funny: 3,
          Useful: 8
        };
      }

      componentDidMount() {
        this.setState({ project: this.state.project.review });
      }

      updateProject = e => {
        const prediction = this.state.project.reviews.prediction;
        const useremail = localStorage.getItem("email");
        const newInfo = this.state.project.review;
        e.preventDefault();
        // this.props.updateProjectInfo(useremail, newInfo, prediction);
        // this.setState({
        //   review: {
        //     ...this.state.projects.reviews,
        //     project: e.target.value
        //   }
        // });
      };

      changeHandler = e => {
        console.log("NAME",[e.target.id],"Value",[e.target.value])
        this.setState({
            review: e.target.value
        });
        console.log("STATE",this.state)
      };

    render(){
        return (
        <div className="dash">
            <Form
                projects={this.state}
                updateProject={this.updateProject}
                changeHandler={this.changeHandler}
            />
            {/* {console.log("Current state right now", this.state)} */}
            <Prediction
                data={this.state}
            />
        </div>
    );}
}

export default connect(
  null,
  { updateProjectInfo }
)(Dashboard)