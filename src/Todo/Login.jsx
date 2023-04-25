import React from "react";
import { useNavigate } from "react-router-dom";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginsucess: false,
      loginfailed: false,
    };
  }
  usernameOnChange = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  passwordOnChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  inputOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submit = (event) => {
    event.preventDefault();
    console.log("username", this.state.username);
    console.log("password", this.state.password);
    if (this.state.username == "Siran" && this.state.password == "12345678") {
      this.props.navigate(`/home/${this.state.username}`);

      // this.setState({
      //     loginsuccess: true,
      //     loginfailed: false
      // })
    } else {
      this.setState({
        loginsuccess: false,
        loginfailed: true,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="card col-md-4 bg-warning">
            <h4>Login form</h4>
            <form className="mb-4">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="username"
                  value={this.state.username}
                  onChange={this.usernameOnChange}
                ></input>
                <div id="emailHelp" className="form-text">
                  Enter your username
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={this.state.password}
                  onChange={this.passwordOnChange}
                  autoComplete="new-password"
                ></input>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label">Remember me</label>
              </div>
              <div className="justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary col-md-6"
                  onClick={this.submit}
                >
                  Submit
                </button>
                <LoginStatus
                  pass={this.state.loginsuccess}
                  fail={this.state.loginfailed}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function LoginStatus(props) {
  if (props.pass || props.fail) {
    return props.pass ? (
      <div className="alert alert-success text-center mt-4">Login Success</div>
    ) : (
      <div className="alert alert-danger text-center mt-4">Login Failed</div>
    );
  }
}

export default LoginComponent;
