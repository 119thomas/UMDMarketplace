import React from "react";
// import Header from "./Header";
import "./Home.css";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  render = () => {
    return (
      <div className="container">
        <div style={{ backgroundColor: "lightgray", padding: 5 }}>
          {/* <Header /> */}
          <div style={{ display: "flex" }}>
            <div style={{ width: "28%" }}>
              <nav className="navbar">
                <ul className="navbar-nav">
                  <li className="nav-item box border-dark">
                    <Link className="nav-link" to={`/results?keyword=Books`}>
                      <img
                        src={process.env.PUBLIC_URL + "/books.png"}
                        style={{ width: "22%" }}
                      ></img>
                      <p>Books➡️</p>
                    </Link>
                  </li>
                  <li className="nav-item box border-dark">
                    <Link className="nav-link" to={`/results?keyword=Supplies`}>
                      <img
                        src={process.env.PUBLIC_URL + "/pencil.png"}
                        style={{ width: "25%" }}
                      ></img>
                      <p>Supplies➡️</p>
                    </Link>
                  </li>
                  <li className="nav-item box border-dark">
                    <Link className="nav-link" to={`/results?keyword=Tech`}>
                      <img
                        src={process.env.PUBLIC_URL + "/tech.png"}
                        style={{ width: "26%" }}
                      ></img>
                      <p>Tech➡️</p>
                    </Link>
                  </li>
                  <li className="nav-item box border-dark">
                    <Link className="nav-link" to={`/results?keyword=Notes`}>
                      <img
                        src={process.env.PUBLIC_URL + "/notes.jpg"}
                        style={{ width: "20%" }}
                      ></img>
                      <p>Notes➡️</p>
                    </Link>
                  </li>
                  <li className="nav-item box border-dark">
                    <Link className="nav-link" to={`/results?keyword=Apparel`}>
                      <img
                        src={process.env.PUBLIC_URL + "/umd.jpg"}
                        style={{ width: "20%" }}
                      ></img>
                      <p>Apparel➡️</p>
                    </Link>
                  </li>
                  <li className="nav-item box border-dark">
                    <Link className="nav-link" to={`/results?keyword=More`}>
                      <img
                        src={process.env.PUBLIC_URL + "/more.png"}
                        style={{ width: "20%" }}
                      ></img>
                      <p>More➡️</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div style={{ width: "72%", backgroundColor: "lightgrey" }}>
              {/* <div>
                <p>Featured</p>
                <div className="my-flex">
                  <div className="item-box my-flex-vertical">
                    <img src={process.env.PUBLIC_URL + "/macbook.jpg"} />
                    <span>
                      <a href="#">Macbook Pro 2020 </a>
                    </span>
                    <span>
                      $2000 - sold by <a href="#">jzwang43</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        className=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        className=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg"
                      }
                    />
                    <span>
                      <a href="#">iPad Pro </a>
                    </span>
                    <span>
                      $900 - sold by <a href="#">will_234</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://i.rtings.com/images/reviews/keyboard/aukey/km-g9-mechanical-keyboard/km-g9-mechanical-keyboard-design-medium.jpg"
                      }
                    />
                    <span>
                      <a href="#">Mechanical Keyboard </a>
                    </span>
                    <span>
                      $200 - sold by <a href="#">josh_123</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              {[
                "Deals of the Day",
                "Featured",
                "Best Sellers",
                "Recently Viewed",
              ].map((name) => (
                <div>
                  <p>{name}</p>
                  <div className="my-flex">
                    {this.props.items
                      .filter((item) => item.row == name)
                      // .sort(() => 0.5 - Math.random())
                      .slice(0, 3)
                      .map((item) => (
                        <div className="item-box my-flex-vertical">
                          <img src={item.link} />
                          <span>
                            <a href="#">{item.name}</a>
                          </span>
                          <span>
                            ${item.price} - sold by{" "}
                            <a href="#">{item.seller}</a>
                          </span>
                          <div>
                            <button
                              type="button"
                              class=" btn btn-sm btn-warning mb-1"
                              onClick={() => this.props.addToCart(item)}
                            >
                              Add to Cart
                            </button>{" "}
                            <button
                              type="button"
                              class=" btn btn-sm btn-primary mb-1"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      ))}
                    {/* <div className="item-box my-flex-vertical">
                  <img
                    src={
                      "https://cdn02.plentymarkets.com/vm1nws82d5m7/item/images/58042/full/Feldherr-AF21Set-Feldherr-Schaumstoff-Set-fuer-Fo_2.jpg"
                    }
                  />
                  <span>
                    <a href="#">Board Game</a>
                  </span>
                  <span>
                    $2000 - sold by <a href="#">jzwang43</a>
                  </span>
                  <div>
                    <button type="button" class=" btn btn-sm btn-warning mb-1">
                      Add to Cart
                    </button>{" "}
                    <button type="button" class=" btn btn-sm btn-primary mb-1">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="item-box my-flex-vertical">
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0161/4702/products/UMD_USA_gray_black_hat_route_one_apparel_1024x1024.png?v=1488499580"
                    }
                  />
                  <span>
                    <a href="#">UMD Hat</a>
                  </span>
                  <span>
                    $15 - sold by <a href="#">aaaa</a>
                  </span>
                  <div>
                    <button type="button" class=" btn btn-sm btn-warning mb-1">
                      Add to Cart
                    </button>{" "}
                    <button type="button" class=" btn btn-sm btn-primary mb-1">
                      Buy Now
                    </button>
                  </div>
                </div> */}
                  </div>
                </div>
              ))}
              {/* <div>
                <p>Best Sellers</p>
                <div className="my-flex">
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Lab_coat_and_scrubs.jpg/400px-Lab_coat_and_scrubs.jpg"
                      }
                    />
                    <span>
                      <a href="#">Lab Coat</a>
                    </span>
                    <span>
                      $100 - sold by <a href="#">amartyytt</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://uploads-ssl.webflow.com/5ad143610f7efd77b6f188f3/5e3d6ede4a070144b6b8bfdb_IMG_1227.jpg"
                      }
                    />
                    <span>CMSC351 Notes</span>
                    <span>
                      $1000 - sold by <a href="#">asd</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="item-box my-flex-vertical">
                    <img src={process.env.PUBLIC_URL + "/hoodie.jpg"} />
                    <span>
                      <a href="#">UMD Hoodie</a>
                    </span>
                    <span>
                      $30 - sold by <a href="#">jzwang43</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>Recently Viewed</p>
                <div className="my-flex">
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Carandache_Ecridor.jpg"
                      }
                    />
                    <span>
                      <a href="#">Luxury Pen</a>
                    </span>
                    <span>
                      $200 - sold by <a href="#">jASdzwang43</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://www.sprint.com/content/dam/sprint/us/en/device-assets/apple/iphone-se/images/white/devicenb_650x900.png"
                      }
                    />
                    <span>
                      <a href="#">iPhone SE 2020</a>
                    </span>
                    <span>
                      $200 - sold by <a href="#">jzwang43</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="item-box my-flex-vertical">
                    <img
                      src={
                        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6299/6299139_rd.jpg;maxHeight=640;maxWidth=550"
                      }
                    />
                    <span>
                      <a href="#">Surface Headphone</a>
                    </span>
                    <span>
                      $200 - sold by <a href="#">aaaaaa</a>
                    </span>
                    <div>
                      <button
                        type="button"
                        class=" btn btn-sm btn-warning mb-1"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        class=" btn btn-sm btn-primary mb-1"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
          {/* <Footer></Footer> */}
        </div>
      </div>
    );
  };
}
