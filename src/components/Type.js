import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";

const Type = props => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "20px 50px",
        display: "inline-block",
        color: `${currentTheme.textColor}`
      }}
    >
      <Button
        variant={currentTheme.variant}
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
