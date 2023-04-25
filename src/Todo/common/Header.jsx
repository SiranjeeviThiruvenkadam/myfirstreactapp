import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              CGT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home/siran"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/list">
                    List
                  </Link>
                </li>
              </ul>
              <Link className="btn btn-success" to="/logout" type="submit">
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
