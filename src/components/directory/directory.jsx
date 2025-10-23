import { createStructuredSelector } from "reselect";
import { MenuItem } from "../menu-item/menu-item";
import React, { Component } from "react";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
