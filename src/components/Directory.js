import React from "react";
import MenuItem from "./MenuItem";
import "./DirectoryStyles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { sectionsSelector } from "../redux/directory/directorySelectors";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector,
});

export default connect(mapStateToProps)(Directory);
