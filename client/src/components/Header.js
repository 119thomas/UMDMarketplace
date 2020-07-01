import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
  // state = {
  //   count: 0,
  // };
  render = () => {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg w-100 order-1 order-md-0 navbar-light "
          style={{ backgroundColor: "rgb(226, 23, 51)" }}
        >
          <Link className="navbar-brand" to="/">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/a/a6/Maryland_Terrapins_logo.svg"
              }
              style={{ width: "64px" }}
            ></img>
            &nbsp; <strong className="text-white">UMD Marketplace</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.history.push(
                    "/results?keyword=" +
                      document.querySelector("#search").value
                  );
                }}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  id="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <Link to="/results?keyword=`$`"> */}
                <button className="btn btn btn-dark my-2 my-sm-0" type="submit">
                  <span className="text-white"> Search</span>
                </button>
                {/* </Link> */}
              </form>
              {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li> */}

              {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
              {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Cart<img src={process.env.PUBLIC_URL + '/cart.svg'} style={{width:'40px'}}></img>
            </a>
          </li> */}
            </ul>
          </div>
          <div class="navbar-collapse collapse order-3 dual-collapse2">
            {this.props.isLoggedIn == "false" ? (
              <ul class="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="text-white" to="/login">
                    <button
                      className="btn btn btn-dark my-2 my-sm-0"
                      type="submit"
                    >
                      {" "}
                      Login
                    </button>
                  </Link>
                </li>
                &nbsp;
                <li className="nav-item">
                  <Link className="text-white" to="/signup">
                    <button
                      className="btn btn btn-dark my-2 my-sm-0"
                      type="submit"
                    >
                      {" "}
                      Sign up
                    </button>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul class="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/cart.svg"}
                      style={{ width: "auto" }}
                    ></img>{" "}
                    Cart({this.props.cart.length})
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="text-white" to="/inbox">
                    {/* <a > */}
                    <button
                      className="btn btn btn-dark my-2 my-sm-0"
                      type="submit"
                    >
                      {" "}
                      Inbox
                    </button>
                  </Link>
                </li>
                &nbsp;
                <li className="nav-item">
                  <Link to="/new-listing">
                    <button
                      className="btn btn btn-dark my-2 my-sm-0"
                      type="submit"
                    >
                      <span className="text-white">
                        New Listing <strong>+</strong>{" "}
                      </span>
                    </button>
                  </Link>
                </li>
                &nbsp;
                <li className="nav-item">
                  <button
                    className="btn btn btn-dark my-2 my-sm-0"
                    type="submit"
                  >
                    <span
                      className="text-white"
                      onClick={() => {
                        this.props.logout();
                        window.location = "/";
                      }}
                    >
                      {" "}
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <Cart cart={this.props.cart}></Cart>
      </div>
    );
  };
}

export default withRouter(Header);
