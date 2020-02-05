import React, { Component } from "react";
import PropTypes from "prop-types";
import Type from "./Type";

class TypeList extends Component {
  render() {
    console.log(this.props.types);
    return this.props.types.map(type => <Type key={type.name} type={type} />);
  }
}

// PropTypes
TypeList.propTypes = {
  types: PropTypes.array.isRequired
};

export default TypeList;
