import { useState } from "react";

function InputPreview() {
  const [text, setText] = useState("");

  return (
    <>
      <h2>Change Event</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </>
  );
}

export default InputPreview;
