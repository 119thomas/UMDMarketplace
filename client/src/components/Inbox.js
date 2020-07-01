import React from "react";
import { faInbox, faTrash, faArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class Inbox extends React.Component {
  state = {
    default: " Hi, what's the condition of the touch pad on this laptop... ",
    date:"May 16 2020 12:30:01"
  };
  componentDidMount = () => {
    document.querySelectorAll("tr").forEach((a) =>
      a.addEventListener("click", (e) => {
        console.log(e.target);
        document.querySelector("#text").innerHTML = e.target.innerHTML;
      })
    );
  };
  render = () => (
    <div class="container">
      {/* //         <button type="button" class="btn btn-primary" >
//   Launch demo modal
// </button> */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="text">
              {/* ... */}
            </div>
            <div style={{ padding: 10 }}>
              <textarea class="form-control my-reply" row={3}></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
                class="btn btn-primary"
                onClick={()=>{this.setState({default:document.querySelector(".my-reply").value, date:new Date().toString().split(" ").splice(1,4).join(" ")})}}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <h5>
              Inbox <FontAwesomeIcon icon={faInbox} />
            </h5>
          </Tab>
          <Tab>
            {" "}
            <h5>
              Archive <FontAwesomeIcon icon={faArchive} />
            </h5>
          </Tab>
        </TabList>

        <TabPanel>
          <div class="row">
            <div class="col-md-12">
              <div class="grid search">
                <div class="row">
                  <div class="col-md-9">
                    <br></br>
                    <h5>
                      {" "}
                      <strong>Messages (3) </strong>
                    </h5>
                    <div class="padding"></div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <strong>Subject: Macbook Pro 2017</strong> from{" "}
                            <a href="">jzwang319</a>
                            <br></br>
                            <small>{this.state.date}</small>
                            <br />
                            {this.state.default}
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <strong>Subject: BMGT 382 notes</strong> from{" "}
                            <a href="">will148</a>
                            <br></br>
                            <small>May 15 2020 21:43:18</small>
                            <br />
                            I'd be available this Thursday to drop off the
                            notes.
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <strong>Subject: Chemistry tutoring</strong> from{" "}
                            <a href="">josh294</a>
                            <br></br>
                            <small>May 10 2020 21:23:11</small>
                            <br />
                            We can go over the fifth lecture to prepare for the
                            quiz.
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: Physics 270 textbook from{" "}
                            <a href="">ljhu147</a>
                            <br></br>
                            <small>May 9 2020 19:43:11</small>
                            <br />
                            The textbook has some highlights but is in good
                            condition.
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: Geology textbook from{" "}
                            <a href="">amartya18</a>
                            <br></br>
                            <small>May 7 2020 15:43:11</small>
                            <br />
                            Which building would be good to meet at to pick up
                            spot.{" "}
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: Nintendo Switch from{" "}
                            <a href="">kermitthefrog</a>
                            <br></br>
                            <small>May 1 2020 09:43:21</small>
                            <br />
                            The unit is less than a year old and everything
                            works.
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: BMGT291 notes from <a href="">testudo85</a>
                            <br></br>
                            <small>April 30 2020 11:13:51</small>
                            <br />
                            The notes are typed and cover the lectures and
                            discussions.{" "}
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faArchive} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="row">
            <div class="col-md-12">
              <div class="grid search">
                <div class="row">
                  <div class="col-md-9">
                    <br></br>
                    <h5>
                      {" "}
                      <strong>Archived Messages </strong>
                    </h5>
                    <div class="padding"></div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: Dell mouse from <a href="">jzwang319</a>
                            <br></br>
                            <small>3/17/2018 12:30 PM</small>
                            <br />
                            There's no instruction manual but you should be
                            ab...
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faInbox} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: INES textbook from <a href="">will148</a>
                            <br></br>
                            <small>2/3/2018 1:58 PM</small>
                            <br />
                            Sure, I can meet you at McKeldin this Friday for
                            t...
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faInbox} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="number text-center"></td>
                          <td class="image">
                            <img
                              src={process.env.PUBLIC_URL + "/avatar.png"}
                              style={{ height: "100px", width: "100px" }}
                            ></img>
                          </td>
                          <td
                            class="product"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Subject: Wacom Drawing Tablet from{" "}
                            <a href="">josh294</a>
                            <br></br>
                            <small>1/29/2018 9:33 AM</small>
                            <br />
                            The tablet comes with the original wires and pen...
                          </td>
                          <td class="price text-right">
                            <br></br>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faInbox} />
                            </button>
                            <button
                              style={{ margin: "5px" }}
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
