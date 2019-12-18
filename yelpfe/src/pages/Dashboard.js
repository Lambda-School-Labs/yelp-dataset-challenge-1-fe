// <!-- svg -->
//                 <svg width="100%" height="100%" class="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><circle class="circle-chart-background" stroke="#efefef" stroke-width="3" fill="none" cx="21" cy="21" r="15.91549431"></circle><circle class="circle-chart-circle" stroke="#ffec26" stroke-width="3" stroke-dasharray="65,100" stroke-linecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle><g class="gpa-text"><text x="50%" y="50%" class="chart-label">Health</text><text x="50%" y="50%" class="chart-number">65%</text></g></svg>
import React, { Component } from "react";
import Svg from "../components/svg/svg";
import Form from "../components/form/Form"
import "./dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          disabled: false,
          project: []
        };
      }

      componentDidMount() {
        this.setState({ project: this.state.project });
      }

      updateProject = e => {
        const token = localStorage.getItem("token");
        const userId = this.state.project.user_id;
        const newInfo = this.state.project;
        e.preventDefault();
        this.props.updateProjectInfo(userId, newInfo, token);
        this.setState({
          disabled: true
        });
      };

      changeHandler = e => {
        this.setState({
          project: {
            ...this.state.project,
            [e.target.name]: e.target.value
          }
        });
      };

    render(){
        return (
        <div>
            <Form
                updateProject={this.updateProject}
                changeHandler={this.changeHandler}
            />
            <Svg/>
        </div>
    );}
}

export default Dashboard