import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Type = props => {
  return (
    <div style={{ padding: "10px" }}>
      <Button
        variant="outline-secondary"
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
