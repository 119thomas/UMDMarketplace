import React from "react";
// import Header from "./Header";
import { withRouter } from "react-router-dom";
import "./NewListing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faDollarSign,
  faArrowRight,
  faCoins,
  faSearchDollar,
  faImage,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

class NewListing extends React.Component {
  /* constructor */
  constructor(props) {
    super(props);
    this.state = {
      img: process.env.PUBLIC_URL + "/listDefault.png",
      title: "",
      category: "Notes, Supplies etc.",
      description: "",
      price: "",
      sellerComments: "",
    };
    // this.handleImgChange = this.handleImgChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSellerCommentsChange = this.handleSellerCommentsChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* event handlers */
  handleImgChange = () => {
    const preview = document.querySelector("#img-preview");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        preview.src = reader.result;
        this.setState({ img: reader.result });
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.title });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }
  handleSellerCommentsChange(event) {
    this.setState({ sellerComments: event.target.value });
  }

  /* submit */
  handleSubmit(event) {
    event.preventDefault();
    var data = [
      {
        title: this.state.title,
        price: this.state.price,
        seller: "dddd",
        img: this.state.img,
        category: this.state.category,
        description: this.state.description,
        sellerComments: this.state.sellerComments,
      },
    ];
    this.props.sendData(data);
    this.props.history.push("/Results");
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        {/* <Header /> */}
        <br></br>
        <div class="sub-header">
          <h1>
            List Item <FontAwesomeIcon icon={faSearchDollar}></FontAwesomeIcon>
          </h1>
        </div>
        <hr></hr>
        <br></br>
        <div className="my-container">
          <div class="productImg">
            <div class="img-responsive">
              <input type="file" onChange={this.handleImgChange}></input>
              <div>
                <img
                  src={this.state.img}
                  style={{ width: "400px", height: "auto" }}
                  display={this.state.img || "none"}
                  alt="productImg"
                  id="img-preview"
                ></img>
              </div>
              {/* <button class="addImgBtn">
              Add Image <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
            </button> */}
            </div>
          </div>
          <div class="productInfo">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label>
                  <b>Title:</b>
                </label>
                <input
                  class="form-control"
                  placeholder="What buyers will see when they search"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  required
                />
              </div>
              <div class="formgroup">
                <label>
                  <b>Category:</b>
                </label>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.category}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      title="Notes"
                      onClick={this.handleCategoryChange}
                    >
                      Notes
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      title="Supplies"
                      onClick={this.handleCategoryChange}
                    >
                      Supplies
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      title="Tech"
                      onClick={this.handleCategoryChange}
                    >
                      Tech
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      title="Apparel"
                      onClick={this.handleCategoryChange}
                    >
                      Apparel
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      title="Books"
                      onClick={this.handleCategoryChange}
                    >
                      Books
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      title="Games"
                      onClick={this.handleCategoryChange}
                    >
                      Games
                    </a>
                  </div>
                </div>
              </div>
              <br></br>
              <div class="form-group">
                <label>
                  <b>Description:</b>
                </label>
                <textarea
                  class="form-control rounded-0"
                  rows="5"
                  placeholder="Date, Color, Specifications etc."
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  required
                ></textarea>
              </div>
              {/* <label>
                <b>Item Condition:</b>
              </label> */}
              {/* <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked={this.state.}
                />
                <label class="form-check-label" for="exampleRadios1">
                  New
                </label>
              </div> */}
              {/* <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Used
                </label>
              </div> */}
              <br></br>
              <label>
                <b>Price:</b>
              </label>
              <div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="How much are you looking for?"
                    value={this.state.price}
                    onChange={this.handlePriceChange}
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Seller Comments</label>
                <textarea
                  class="form-control rounded-0"
                  rows="8"
                  placeholder="Anything else you would like to mention about your product..."
                  value={this.state.sellerComments}
                  onChange={this.handleSellerCommentsChange}
                />
              </div>
              <label>
                <b>Terms and Conditions: </b>{" "}
                <a href="">terms and conditions</a>
              </label>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label class="form-check-label" for="exampleCheck1">
                  I have read and agree to UMD Marketplace's Terms and
                  Conditions
                </label>
              </div>
              <br></br>
              <button
                type="submit"
                class="btn btn-primary"
                id="listItem"
                onClick={this.props.updateItems}
              >
                List Item <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewListing);
