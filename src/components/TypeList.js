import React, { useContext } from "react";
import Type from "./Type";
import { useHttp } from "./hooks/http";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";

const TypeList = props => {
  const [isLoading, data] = useHttp("https://pokeapi.co/api/v2/type", []);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  let content = <p>Loading types...</p>;

  if (!isLoading && data) {
    content = data.results.map(type => (
      <Type
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`
        }}
        key={type.name}
        type={type}
      />
    ));
  }

  return content;
};

export default TypeList;
