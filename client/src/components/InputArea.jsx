import React, { useState } from "react";
import Outputtable from "./Outputtable";
import Safealert from "./SafeAlert";

function InputArea() {
  const [formData, setFormData] = useState({
    content: "",
    unsafe_ing: "",
    isTable: false,
    isSafe: false,
    title: "",
    link: "",
    spf: "",
    brand: "",
  });

  function handleChange(event) {
    const newValue = event.target.value.toLowerCase();
    setFormData((prevData) => ({
      ...prevData,
      content: newValue,
    }));
    // Check if the input is cleared and reload the window
    if (newValue.trim() === "") {
      window.location.reload();
    }
  }

  async function checkIng(event) {
    event.preventDefault();

    const unsafeInglist = [
      "oxybenzone",
      "octinoxate",
      "octocrylene",
      "homosalate",
      "parabens",
      "triclosan",
      "para aminobenzoic acid",
      "methylbenzylidene camphor",
      "avobenzone",
    ];

    let unsafeIngredients = [];

    for (let ingredient of unsafeInglist) {
      if (formData.content.includes(ingredient)) {
        unsafeIngredients.push(ingredient);
      }
    }

    if (unsafeIngredients.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        isTable: true,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        isSafe: true,
      }));
    }

    setFormData((prevData) => ({ ...prevData, unsafe_ing: unsafeIngredients }));
  }

  const onSubmitForm = async (e) => {
    console.log("onSubmitForm");
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Product created successfully");
        alert(
          "Thank you for your participation! Product added successfully. After awaiting administrator approval, your submitted product will be displayed on the webpage."
        );
        window.location = "/check";
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div class="row justify-content-center">
      <div class="col-md-6 mt-5 ">
        <form>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              onChange={handleChange}
              name="content"
              placeholder="Copy and Paste the Ingredients of the Sunscreen"
              rows="10"
              value={formData.content}
            ></textarea>
          </div>
          <button onClick={checkIng} class="btn btn-warning d-block mx-auto">
            <h2>Check</h2>
          </button>

          {formData.isTable && <Outputtable ing={formData.unsafe_ing} />}
          {formData.isSafe && <Safealert />}
        </form>
      </div>

      {formData.isTable | formData.isSafe && (
        <div class="mb-3 row justify-content-center">
          <form class="col-md-6 mt-5 " onSubmit={onSubmitForm}>
            <h2 for="exampleFormControlInput1" class="form-label">
              Basic Product Info
            </h2>
            <div class="input-group">
              <span class="input-group-text">Product</span>
              <input
                type="text"
                class="form-control"
                placeholder="Brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
              />
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control mt-2"
                placeholder="SPF"
                id="floatingInput"
                name="spf"
                value={formData.spf}
                onChange={handleInputChange}
              />
              <label for="floatingInput">SPF</label>
              <div class="form-text" id="basic-addon4">
                Please enter an integer value, ignore the "+" *_*!
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Product Img Link"
                id="floatingInput"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
              />
              <label for="floatingInput">Product Img Link</label>
            </div>
            <button
              type="submit"
              className="btn btn-success d-block mx-auto"
              name="addButton"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default InputArea;
