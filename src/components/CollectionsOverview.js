import React from "react";
import "./CollectionsOverviewStyles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../redux/shop/shopSelectors";
import CollectionPreview from "./CollectionPreview";

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
