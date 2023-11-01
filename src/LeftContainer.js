import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

// make state variable for email, button, & input

export default function LeftContainer({ stage, setStage }) {
  const LABEL_TEXTS = [
    "Apply to our agency",
    "What's your work budget?",
    "Anything else we should know?",
    "Thank you!"
  ];
  const [email, setEmail] = useState("");
  const [buttonSelection, setButtonSelection] = useState("");
  const [details, setDetails] = useState("");

  let content;
  if (stage === 0) {
    content = (
      <TextInput updateValue={setEmail} placeholder="What's your email?" />
    );
  } else if (stage === 1) {
    content = <ButtonGroup updateValue={setButtonSelection} />;
  } else if (stage === 2) {
    content = <TextInput updateValue={setDetails} />;
  } else if (stage === 3) {
    alert(JSON.stringify({ email, buttonSelection, details }));
  }

  return (
    <div className="left-container">
      <div className="inner-left-container">
        <h2>{LABEL_TEXTS[stage]}</h2>
        {content}
        {stage !== 3 && (
          <button onClick={() => setStage(stage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
