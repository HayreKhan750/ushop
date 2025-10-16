import { MenuItem } from "../menu-item/menu-item";
import sections from "./directory.data";
import React, { Component } from "react";

class directory extends Component {
  state = { sections: sections };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default directory;
