import React, { useState } from "react";

function InputArea() {
  const [content, setContent] = useState("");
  const [output, setOutput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value.toLowerCase();
    setContent(newValue);
    console.log(content);
  }

  function checkIng(event) {
    const unsafeInglist = [
      "oxybenzone",
      "octinoxate",
      "octocrylene",
      "homosalate",
      "paba",
      "parabens",
      "triclosan",
    ];

    let unsafeIngredients = "";

    for (let ingredient of unsafeInglist) {
      if (content.includes(ingredient)) {
        unsafeIngredients += ingredient + " is unsafe ";
      }
    }

    setOutput(unsafeIngredients);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Copy and Paste the Ingredients of the Sunscreen"
          rows="10"
          value={content}
        />
        <button onClick={checkIng}>
          <h2>Check</h2>
        </button>
      </form>
      <p>{output}</p>
    </div>
  );
}

export default InputArea;
