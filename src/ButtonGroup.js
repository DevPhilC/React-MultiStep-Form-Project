import { useState } from "react";
/* 
.stage-two-buttons > .selected-button {
  color: #745e5e;
  background-color: white;
}
*/

const ALT_STYLES = {
  border: "none",
  padding: "5px 15px",
  color: "#745e5e",
  backgroundColor: "white"
};

const BUTTON_TEXT = ["2k", "5k", "No Limit"];

export default function ButtonGroup({ updateValue }) {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <div className="stage-two-buttons">
      {BUTTON_TEXT.map((btnText, i) => (
        <button
          key={i}
          onClick={() => {
            setSelectedButton(i);
            updateValue(btnText);
          }}
          style={selectedButton === i ? ALT_STYLES : {}}
        >
          {btnText}
        </button>
      ))}
    </div>
  );
}
