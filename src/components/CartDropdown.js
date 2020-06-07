import React from "react";
import Button from "./Button";
import "./CartDropdownStyles.scss";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/cartSelectors";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
