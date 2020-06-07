import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./HeaderStyles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
}

// no need to pass in to call every selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
