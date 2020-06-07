import React from "react";
import { ReactComponent as ShppingBagIcon } from "../assets/shoppingBag.svg";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { connect } from "react-redux";
import "./CartIconStyles.scss";

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShppingBagIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
