import React from "react";
import "./Cart.css";
export default class Cart extends React.Component {
  render = () => {
    return (
      <div>
        {/* <button type="button" class="btn btn-primary" >
  Launch demo modal
</button> */}

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              {/* <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}
              <div class="modal-body">
                {/* <div class="container-cart"> */}
                <div class="shopping-cart">
                  <div class="shopping-cart-header">
                    <i class="fa fa-shopping-cart cart-icon"></i>
                    <span class="badge">{this.props.cart.length}</span>
                    <div class="shopping-cart-total">
                      <span class="lighter-text">Total:</span>
                      <span class="main-color-text">
                        $
                        {this.props.cart.reduce(
                          (total, item) => total + item.price, 0
                        )}
                      </span>
                    </div>
                  </div>

                  <ul class="shopping-cart-items">
                      {
                    this.props.cart.map(item => <li class="clearfix">
                      <img
                        src={item.link}
                        alt="item"
                        class="item-img"
                      />
                      <span class="item-name">{item.name}</span>
                      <span class="item-price">${item.price}</span>
                      <span class="item-quantity">Quantity: 01</span>
                    </li>)
  }
                    {/* <li class="clearfix">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
                        alt="item1"
                      />
                      <span class="item-name">KS Automatic Mechanic...</span>
                      <span class="item-price">$1,249.99</span>
                      <span class="item-quantity">Quantity: 01</span>
                    </li>

                    <li class="clearfix">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
                        alt="item1"
                      />
                      <span class="item-name">Kindle, 6" Glare-Free To...</span>
                      <span class="item-price">$129.99</span>
                      <span class="item-quantity">Quantity: 01</span>
                    </li> */}
                  </ul>

                  <a href="#" class="btn btn-primary">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  };
}
