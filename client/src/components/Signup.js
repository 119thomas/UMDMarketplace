  import React from "react";
  import "./Login.css";
  // import Header from "./Header";
  // import Footer from "./Footer";
  import {withRouter} from "react-router-dom"
  class Signup extends React.Component {
    render = () => {
      //   console.log(this.state)
      return (
        <div>
          {/* <Header></Header> */}
          {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="!#">
            <img
              alt="logo"
              src="https://mti.umd.edu/sites/mti.umd.edu/themes/engrcenter_sub_mti/images/logo-mti-v4.svg"
            ></img>
          </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="!#">
                    New User Requisition{" "}
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav> */}

          <form className="container mt-3" onSubmit={(e)=>{
              e.preventDefault();
              console.log("A")
              this.props.login()
              this.props.history.push('/')
          }}>
            <div className="text-center">
              <h3>Sign up</h3>
              {/* <h5>
                Not a member yet? <a href="/new-user">Sign up now</a>
              </h5> */}
            </div>
            {/* <div className="form-group row">
              <div className="col">
                <label  htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder=""
                />
              </div>
              <div className="col">
                <label  htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder=""
                />
              </div>
            </div> */}
            {/* <div className="form-group">
              <label  htmlFor="org">Organization</label>
              <input
                type="text"
                className="form-control"
                id="org"
                // placeholder="name@example.com"
              />
            </div> */}
            <div className="form-group">
              <label  htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label  htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                //   placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label  htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                //   placeholder="name@example.com"
              />
            </div>
            {/* <div className="form-check">
            
              <input
                type="checkbox"
                className="form-check-input"
                id="password"
                //   placeholder="name@example.com"
              />
                <label className="form-check-label" htmlFor="password">Remember me on this computer</label>
            </div> */}
            {/* <div className="form-group">
              <label  htmlFor="request">Request</label>
              <textarea className="form-control" id="request" rows="6"></textarea>
            </div> */}
            <div className="form-group">
            <a href="!#"> Forgot your password?</a>
            </div>
            <button type="submit" className="btn btn-warning ">
              Submit
            </button>
          </form>
          {/* <Footer></Footer> */}
        </div>
      );
    };
  }

  export default withRouter(Signup)
