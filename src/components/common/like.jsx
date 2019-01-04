import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends Component {
  render() {
    let icons = ["igloo", "heart"];
    let classes = [];
    if (!this.props.liked) {
      classes.push(icons[0]);
    } else {
      classes.push(icons[1]);
    }
    return (
      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        icon={classes[0]}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Like;
