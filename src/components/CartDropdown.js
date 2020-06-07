import React from "react";
import Button from "./Button";
import "./CartDropdownStyles.scss";

function CartDropdown(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
