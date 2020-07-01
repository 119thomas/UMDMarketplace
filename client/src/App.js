import React from "react";
import "./App.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewListing from "./components/NewListing";
import Inbox from "./components/Inbox";
import Results from "./components/Results";
// import Login from "./components/Login";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { withCookies } from "react-cookie";
import Signup from "./components/Signup";

class App extends React.Component {
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };

  createListing = (name, price, seller, link, row, category, description) => {
    return {
      name,
      price,
      seller,
      link,
      row,
      category,
      description
    };
  };
 

  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      cart: [],
      isLoggedIn: cookies.get("isLoggedIn") || false,
      /* items array keeps all listings */
      filteredItems: [],
      items: [
        this.createListing(
          "Playing Card",
          30,
          "asd_asd",
          "https://i.pinimg.com/474x/05/07/98/050798bb553fa26a68677f6934ba1675--warhammer-models-ponti.jpg",
          "Deals of the Day",
          "Supplies"
        ),
        this.createListing(
          "Board Game",
          200,
          "jzwang43",
          "https://cdn02.plentymarkets.com/vm1nws82d5m7/item/images/58042/full/Feldherr-AF21Set-Feldherr-Schaumstoff-Set-fuer-Fo_2.jpg",
          "Deals of the Day",
          "Supplies"
        ),
        this.createListing(
          "UMD Hat",
          15,
          "aaaa",
          "https://cdn.shopify.com/s/files/1/0161/4702/products/UMD_USA_gray_black_hat_route_one_apparel_1024x1024.png?v=1488499580",
          "Deals of the Day",
          "Apparel"
        ),
        this.createListing(
          "Macbook Pro 2020",
          2000,
          "asd_asd",
          `${process.env.PUBLIC_URL + "/macbook.jpg"}`,
          "Recently Viewed",
          "Tech"
        ),
        this.createListing(
          "iPad Pro",
          900,
          "will_234",
          "https://cdn.pocket-lint.com/r/s/1200x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg",
          "Recently Viewed",
          "Tech"
        ),
        this.createListing(
          "Playing Card",
          30,
          "asd_asd",
          "https://i.pinimg.com/474x/05/07/98/050798bb553fa26a68677f6934ba1675--warhammer-models-ponti.jpg",
          "Recently Viewed",
          ""
        ),
        this.createListing(
          "Mechanical Keyboard ",
          200,
          "josh_123",
          "https://i.rtings.com/images/reviews/keyboard/aukey/km-g9-mechanical-keyboard/km-g9-mechanical-keyboard-design-medium.jpg",
          "Best Sellers",
          ""
        ),
        this.createListing(
          "Lab Coat",
          30,
          "amartyytt",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Lab_coat_and_scrubs.jpg/400px-Lab_coat_and_scrubs.jpg",
          "Best Sellers",
          "Supplies"
        ),
        this.createListing(
          "CMSC351 Notes",
          351,
          "asd_asd",
          "https://uploads-ssl.webflow.com/5ad143610f7efd77b6f188f3/5e3d6ede4a070144b6b8bfdb_IMG_1227.jpg",
          "Best Sellers",
          "Notes"
        ),
        this.createListing(
          "Luxury Pen",
          30,
          "aaaaaaaa",
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Carandache_Ecridor.jpg",
          "Featured",
          "Supplies"
        ),
        this.createListing(
          "UMD Hoodie",
          30,
          "asd_aaaaa",
          `${process.env.PUBLIC_URL + "/hoodie.jpg"}`,
          "Featured",
          "Apparel"
        ),
        this.createListing(
          "iPhone SE",
          300,
          "asd_asd",
          "https://www.sprint.com/content/dam/sprint/us/en/device-assets/apple/iphone-se/images/white/devicenb_650x900.png",
          "Featured",
          "Tech"
        ),
      ],
    };

    // this.updateItems = this.updateItems.bind(this);
  }

  /************************ recieve data from the newListing form here ************************/
  /************************ Need to update items state here *******************/
  updateItems = (data) => {
    // alert("title: " + data[0].title +
    //       "\nprice: " + data[0].price +
    //       "\nseller: " + "<seller name>" +
    //       "\nimg: " + data[0].img +
    //       "\ncategory: " + data[0].category);
    console.log(data)
    this.setState({
      items: this.state.items.concat(
        this.createListing(
          data[0].title,
          data[0].price,
          data[0].seller,
          data[0].img,
          "Featured",
          data[0].category,
          data[0].description,
        )
      ),
    });
    console.log(this.state.items);
  };

  // state = {
  //   isLoggedIn: cookie.load("isLoggedIn"),
  // };

  filter = (cat) => {
    this.setState({
      filteredItems: this.state.items.filter((a) => a.category == cat),
    });
  };

  login = () => {
    const { cookies } = this.props;

    cookies.set("isLoggedIn", "true", { path: "/" });
    this.setState({ isLoggedIn: "true" });
  };

  logout = () => {
    const { cookies } = this.props;
    cookies.set("isLoggedIn", "false", { path: "/" });
    this.setState({ isLoggedIn: "false" });
    window.location = "/";
  };

  addToCart = (item) => {
    this.state.cart.includes(item) ||
      this.setState({
        cart: [...this.state.cart, item],
      });
  };
  render = () => {
    // console.log(this.props.cookies);
    return (
      <div id="main">
        <Router>
          <Header
            isLoggedIn={this.state.isLoggedIn}
            logout={this.logout}
            cart={this.state.cart}
          ></Header>
          {/* <div>AAAA</div> */}
          <Switch>
            <Route path="/login">
              <Login login={this.login} />
            </Route>
            <Route path="/signup">
              <Signup login={this.login} />
            </Route>
            <Route exact path="/">
              <Home
                isLoggedIn={this.state.isLoggedIn}
                items={this.state.items}
                addToCart={this.addToCart}
              />
            </Route>
            {/* <Route path="/test" component={App} /> */}
            <Route path="/results">
              <Results
                addToCart={this.addToCart}
                filteredItems={
                  this.state.filteredItems.length == 0
                    ? this.state.items
                    : this.state.filteredItems
                }
                filter={this.filter}
              ></Results>
            </Route>
            <Route path="/new-listing">
              <NewListing sendData={this.updateItems} />
            </Route>
            <Route path="/inbox" component={Inbox} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  };
}

export default withCookies(App);
