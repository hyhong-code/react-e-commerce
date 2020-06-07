import React from "react";
import Button from "./Button";
import "./CollectionItemStyles.scss";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";

function CollectionItem(props) {
  const {
    item: { name, price, imageUrl },
    addItem,
  } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItem(props.item)} isInverted>
        ADD TO CART
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch(addItem(newItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
