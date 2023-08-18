import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
      super(props)
      this.state = {
        userName: '',
      }
      this.changeUserName = this.changeUserName.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.login = props.login 
  }

  changeUserName(event){
      this.setState({
          userName:event.target.value
      })
  }

  onSubmit(event){
      event.preventDefault()
      this.login(this.state.userName)
  }

  render() {
  return (
    <div className="container bg">
      <div className="panel">
        <p align="middle">                  
          <span className="panel-heading black white">Log in</span>
        </p>

        <form className="form-pad" onSubmit={this.onSubmit}>
          <div className="field pad-log">
            <div className="control">
              <input
                className="input"
                type="username"
                placeholder="Username*"
                onChange={this.changeUserName}
                minLength="5" maxLength="10"
                required>
              </input>
            </div>
          </div>
          <div className="control pad-top">
            <p align="middle">
              <button className="button is-dark is-rounded btn-block" type="submit" value="Submit">
                Login
              </button>
            </p>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;