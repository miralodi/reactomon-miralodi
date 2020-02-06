import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Type = props => {
  return (
    <div style={{ padding: "10px 50px", display: "inline-block" }}>
      <Button
        variant="outline-success"
        style={{ width: "200px", textAlign: "center" }}
      >
        {props.type.name}
      </Button>
    </div>
  );
};

// PropTypes
Type.propTypes = {
  type: PropTypes.object.isRequired
};

export default Type;
