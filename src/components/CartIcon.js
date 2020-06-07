import React from "react";
import { ReactComponent as ShppingBagIcon } from "../assets/shoppingBag.svg";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import "./CartIconStyles.scss";

function CartIcon({ itemCount, toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShppingBagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
