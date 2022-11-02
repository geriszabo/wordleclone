import React, {useEffect, useCallback, useContext} from "react";
import App, { AppContext } from "../App";
import Key from "./Key";

export default function Keyboard() {
  const { onEnter, onDeleteLetter, onSelectLetter } = useContext(AppContext);


  const keys1 = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Y", "X", "C", "V", "B", "N", "M"];

  const handleKeyup = useCallback(
    ({key}) => {
      if(key === "Enter") onEnter()
      if(key === "Backspace") onDeleteLetter()
      if (key.match(/^[A-Za-zöüóúőűáéÖÜÓÚŐŰÁÉ]$/)) {
        onSelectLetter(key.toUpperCase())
    
      }
    }
  )
  

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup)

    return () => document.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup])

  return (
    <div className="keyboard" onKeyUp={handleKeyup}>
      <div className="line1 line">
        {keys1.map((e,i) => <Key keyVal={e} key={i}></Key>)}
      </div>
      <div className="line2 line">
        {keys2.map((e,i) => <Key keyVal={e} key={i}></Key>)}
      </div>
      <div className="line3 line">
        <Key keyVal={"ENTER"} bigKey></Key>
        {keys3.map((e,i) => <Key keyVal={e} key={i}></Key>)}
        <Key keyVal={"⌫"} bigKey></Key>
      </div>
    </div>
  )
}
