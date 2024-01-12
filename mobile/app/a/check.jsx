import { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Safeoutput, Output } from "../../components";
import { COLORS, SIZES } from "../../constants";

export default function Check({ info }) {
  const info_lower = info.toLowerCase();
  const [formData, setFormData] = useState({
    unsafe_ing: "",
    isTable: false,
    isSafe: false,
    title: "",
    link: "",
    spf: "",
    brand: "",
  });

  useEffect(() => {
    // Function to check unsafe ingredients
    const checkUnsafeIngredients = () => {
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
        if (info_lower.includes(ingredient)) {
          unsafeIngredients.push(ingredient);
        }
      }

      if (unsafeIngredients.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          isTable: true,
          unsafe_ing: unsafeIngredients,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          isSafe: true,
        }));
      }
    };

    // Call the function to check unsafe ingredients
    checkUnsafeIngredients();
  }, [info]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    console.log("onSubmitForm");

    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Product created successfully");
        alert(
          "Thank you for your participation! Product added successfully. After awaiting administrator approval, your submitted product will be displayed on the webpage."
        );

        // You might want to navigate to another screen or update the UI
        // based on the success of the form submission.
        // The exact approach would depend on your navigation setup (React Navigation, etc.).
      } else {
        console.error("Failed to create product");
        // Handle the error or provide feedback to the user.
      }
    } catch (error) {
      console.error(error.message);
      // Handle the error or provide feedback to the user.
    }
  };

  return (
    <>
      {formData.isSafe && <Safeoutput />}
      {formData.isTable && (
        <>
          <Output ing={formData.unsafe_ing} />
          <Text style={styles.text}>
            Would you be willing to submit additional information for this
            product to help us enhance the database and provide more
            comprehensive search information?
          </Text>
          <View>
            <TextInput
              placeholder="Brand"
              name="brand"
              style={styles.input}
              onChangeText={(text) => handleInputChange("brand", text)}
              value={formData.brand}
            />
            <TextInput
              placeholder="Title"
              name="title"
              style={styles.input}
              onChangeText={(text) => handleInputChange("title", text)}
              value={formData.title}
            />
            <TextInput
              placeholder="SPF"
              name="spf"
              style={styles.input}
              onChangeText={(text) => handleInputChange("spf", text)}
              value={formData.spf}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 15,
    backgroundColor: COLORS.yellow,
    borderRadius: SIZES.small,
  },
  text: {
    margin: 4,
    fontSize: SIZES.small,
  },
  input: {
    height: 40,
    borderColor: COLORS.blue,
    borderWidth: 1,
  },
  text2: {
    fontSize: 16,
    margin: 10,
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: SIZES.small,
  },
});
