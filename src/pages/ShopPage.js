import React from "react";
import CollectionsOverview from "../components/CollectionsOverview";
import CollectionPage from "./CollectionPage";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../redux/shop/shopSelectors";
import "./ShopPageStyles.scss";
import { Route, Switch } from "react-router-dom";

function ShopPage({ match }) {
  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => <CollectionsOverview />}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
