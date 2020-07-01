import React from "react";
// import Header from "./Header";
import "./Results.css";
import {
  faHome,
  faFilter,
  faSearch,
  faList,
  faEdit,
  faFilePdf,
  faCalendar,
  faCartArrowDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
const queryString = require("query-string");

class Results extends React.Component {
  render = () => {
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed); // replace param with your own
    const keyword = parsed.keyword || "";
    // const category = parsed.category || ""
    // let keyword = this.props.location.search.split("=")[1] || "";
    // console.log("keyword", keyword);
    console.log(this.props);
    return (
      <div class="container">
        {/* <Header /> */}
        <div class="row">
          <div class="col-md-12">
            <div class="grid search">
              <div class="grid-body">
                <div class="row">
                  <div class="col-md-3">
                    <h2 class="grid-title">
                      <FontAwesomeIcon icon={faFilter} /> Filters
                    </h2>
                    <hr></hr>
                    <h4>By category:</h4>
                    {["Tech", "Apparel", "Notes", "Supplies", "Games"].map(
                      (cat) => (
                        <div class="checkbox">
                          <label>
                            <input
                              onChange={(e) =>
                                e.target.checked && this.props.filter(cat)
                              }
                              type="radio"
                              name="category"
                              class="icheck"
                            />{" "}
                            {cat}
                          </label>
                        </div>
                      )
                    )}
                    {/* <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> Apparel
                      </label>
                    </div> */}
                    {/* <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> Notes
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> Supplies
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> Games
                      </label>
                    </div> */}
                    <div class="padding"></div>
                    <hr></hr>
                    <h4>By date:</h4>
                    From
                    <div
                      class="input-group date form_date"
                      data-date="2014-06-14T05:25:07Z"
                      data-date-format="dd-mm-yyyy"
                      data-link-field="dtp_input1"
                    >
                      <input type="text" class="form-control"></input>
                      <span class="input-group-addon bg-blue">
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                    </div>
                    <input type="hidden" id="dtp_input1" value=""></input>
                    To
                    <div
                      class="input-group date form_date"
                      data-date="2014-06-14T05:25:07Z"
                      data-date-format="dd-mm-yyyy"
                      data-link-field="dtp_input2"
                    >
                      <input type="text" class="form-control"></input>
                      <span class="input-group-addon bg-blue">
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                    </div>
                    <input type="hidden" id="dtp_input2" value=""></input>
                    <div class="padding"></div>
                    <br></br>
                    <hr></hr>
                    <h4>By price:</h4>
                    <div class="slider-primary">
                      <div
                        class="slider slider-horizontal"
                        style={{ width: "152px" }}
                      >
                        <div class="slider-track">
                          <div
                            class="slider-selection"
                            style={{ left: "30%", width: "50%" }}
                          ></div>
                          <div
                            class="slider-handle round"
                            style={{ left: "30%" }}
                          ></div>
                          <div
                            class="slider-handle round"
                            style={{ left: "80%" }}
                          ></div>
                        </div>
                        <div
                          class="tooltip top hide"
                          style={{ top: "-30px", left: "50.1px" }}
                        >
                          <div class="tooltip-arrow"></div>
                          <div class="tooltip-inner">300 : 800</div>
                        </div>
                        <input
                          type="text"
                          class="slider"
                          value=""
                          data-slider-min="0"
                          data-slider-max="1000"
                          data-slider-step="1"
                          data-slider-value="[300,800]"
                          data-slider-tooltip="hide"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-9">
                    <p>Showing all results matching "{keyword}"</p>

                    <div class="padding"></div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="btn-group">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Filter By: Featured
                          </button>
                          <ul class="dropdown-menu" role="menu">
                            <li>
                              <a href="#">Featured</a>
                            </li>
                            <li>
                              <a href="#">Price: Low to High</a>
                            </li>
                            <li>
                              <a href="#">Price: High to Low</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-md-6 text-right">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default active">
                            <FontAwesomeIcon icon={faList} />
                          </button>
                          <button type="button" class="btn btn-default">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <tbody>
                          {this.props.filteredItems
                            .filter((item) =>
                              Object.values(item)
                                .join(" ")
                                .toLowerCase()
                                .includes(keyword.toLowerCase())
                            )
                            .map((item) => (
                              <tr>
                                <td class="number text-center"></td>
                                <td class="image">
                                  <img
                                    src={item.link}
                                    style={{ height: "auto", width: "150px" }}
                                  ></img>
                                </td>
                                <td class="product">
                                  <strong>{item.name}</strong> sold by{" "}
                                  <a href="">{item.seller}</a>
                                  <br></br>
                                  {/* <small>Product details go here</small> */}
                                  <br />
                                 {item.description}
                                </td>
                                <td class="rate text-right">
                                  <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                  </span>
                                </td>
                                <td class="price text-right">
                                  ${item.price} <br></br>
                                  <button
                                    style={{ margin: "5px" }}
                                    type="button"
                                    class="btn btn-primary btn-sm"
                                    onClick={() => this.props.addToCart(item)}
                                  >
                                    <FontAwesomeIcon icon={faCartArrowDown} />
                                  </button>
                                  <button
                                    style={{ margin: "5px" }}
                                    type="button"
                                    class="btn btn-primary btn-sm"
                                  >
                                    <FontAwesomeIcon icon={faHeart} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          {/* <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr>
                      <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr>
                      <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr>
                      <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr>
                      <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr>
                      <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr>
                      <tr>
                        <td class="number text-center"></td>
                        <td class="image"><img src={process.env.PUBLIC_URL + "/macbook.jpg"} style={{height: "100px", width: "150px"}} ></img></td>
                        <td class="product"><strong>Product 1</strong> sold by <a href="">Seller Name</a><br></br><small>Product details go here</small><br />Seller Comments / Description goes here</td>
                        <td class="rate text-right"><span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span></td>
                        <td class="price text-right">$350 <br></br><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCartArrowDown} /></button><button style={{margin: "5px"}} type="button" class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faHeart} /></button></td>
                      </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default withRouter(Results);
