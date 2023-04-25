import React from "react";

class UncontrolledComponent extends React.Component {

    constructor(props) {
        super(props);

        this.username = React.createRef();
        this.password = React.createRef();
    }
    submit = (event) => {
        event.preventDefault();
        console.log("username", this.username.current.value);
        console.log("password", this.password.current.value);
    }




    render() {
        return (
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h4>Uncontrolled form</h4>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" ref={this.username}></input>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" ref={this.password} autoComplete="new-password"></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" >Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}


export default UncontrolledComponent;