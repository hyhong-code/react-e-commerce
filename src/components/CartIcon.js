import React from "react";
import { ReactComponent as ShppingBagIcon } from "../assets/shoppingBag.svg";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { connect } from "react-redux";
import "./CartIconStyles.scss";
import { selectCartItemsCount } from "../redux/cart/cartSelectors";

function CartIcon({ itemCount, toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShppingBagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
