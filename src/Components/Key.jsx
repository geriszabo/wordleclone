import React, { useContext } from "react";
import App, { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { onEnter, onDeleteLetter, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "⌫") {
      onDeleteLetter();
    } else {
      onSelectLetter(keyVal.toUpperCase());
    }
  };

  return (
    <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
