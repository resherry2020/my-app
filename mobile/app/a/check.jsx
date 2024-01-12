import { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
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
  text1: {
    fontSize: 16,
    margin: 15,
    color: "black",
    fontWeight: "bold",
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
