import React, { useState } from "react";
import axios from "axios";

function InputArea() {
  const [content, setContent] = useState("");
  const [output, setOutput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value.toLowerCase();
    setContent(newValue);
    console.log(content);
  }

  async function checkIng(event) {
    event.preventDefault();

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
    // Send user input to the server
    try {
      await axios.post("http://localhost:3001/storeInput", {
        userInput: content,
      });
      console.log("User input stored successfully");
    } catch (error) {
      console.error("Error storing user input:", error);
    }
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
