import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  rowSection: {
    height: 60,
    backgroundColor: COLORS.white,
  },
  head: { height: 44, backgroundColor: COLORS.blue },
  headText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text: {
    margin: 6,
    fontSize: SIZES.small,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
