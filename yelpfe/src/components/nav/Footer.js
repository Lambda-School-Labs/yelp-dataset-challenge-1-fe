import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions";
import { connect } from "react-redux";
import './footer.css'

export class Footer extends Component {
  state = {
    user_id: null,
    loggedin: null
  };

  componentDidMount() {
    this.getUserID();
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  getUserID = () => {
    const user_id = localStorage.getItem("user_id");
    if (user_id === null) {
      this.setState({ ...this.state, user_id: user_id });
    }
    return user_id;
  };

  Logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("data");
    this.props.logout();
  };

  render() {
    const id = this.props.user_id;
    return (
      <div className="footer">
        {!id ? (
          <div className="footer-bar container">
            <Link to={`/`}>
              <h2>Yelpie</h2>
            </Link>
            <div className="footer-links">
              <Link to={`/register`}>
                <a className="ui red">Register</a>
              </Link>
              <Link to={`/login`}>
                <a className="ui red">Login</a>
              </Link>
              <Link to="/dashboard">
                  <a className="ui red">Dashboard</a>
                </Link>
            </div>
          </div>
        ) : (
          <>
          <div className="footer-bar container">
            <Link to={`/`}>
              <h2>Yelpie</h2>
            </Link>
              <div className="footer">
                <Link to="/dashboard">
                  <a className="ui red">Dashboard</a>
                </Link>
                {/* <Link to={`/settings`}>
                  <a className="ui red">Settings</a>
                </Link> */}
                <Link to={`/login`}>
                  <a className="ui red" onClick={this.Logout}>
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.authReducer.user.id
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Footer);