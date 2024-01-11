import React from "react";
import { Text } from "react-native";

export default function Check() {
  //input
  const [formData, setFormData] = useState({
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

    let test =
      "Homosalate 130 mg/g, Octocrylene 50 mg/g, Octyl salicylate 50 mg/g, Butyl methoxydibenzoylmethane 45 mg/g, Bemotrizinol 5 mg/g Contains: Phenoxyethanol, Chlorphenesin. Store below 30°C.";

    for (let ingredient of unsafeInglist) {
      if (test.includes(ingredient)) {
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

  return <Text>{formData.unsafe_ing}</Text>;
}
