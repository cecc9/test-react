import { useState } from "react";

export const Test03 = () => {
  const [text, setText] = useState("");

  console.log("render component");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleOnChange} />
        <button>login</button>
      </form>
      <br />
      <div>Typed: {text}</div>
    </div>
  );
};
