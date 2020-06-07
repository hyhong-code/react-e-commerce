import React from "react";
import "./CheckoutPageStyles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import CheckoutItem from "../components/CheckoutItem";

function CheckoutPage({ cartItems, cartTotal }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
