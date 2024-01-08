import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  textcontainer: {
    borderRadius: 4,
    margin: 4,
    padding: 4,
    backgroundColor: "#3366FF",
  },
  text: {
    margin: 4,
  },
  card: {
    marginTop: SIZES.medium,
  },
});

export default styles;
