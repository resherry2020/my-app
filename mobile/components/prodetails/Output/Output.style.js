import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  rowSection: {
    backgroundColor: COLORS.white,
  },
  head: { height: 40, backgroundColor: COLORS.blue },
  headText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  danger: {
    margin: 4,
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: "red",
  },
  text: {
    margin: 4,
    fontSize: SIZES.small,
  },
  textcontainer: {
    borderRadius: 4,
    padding: 4,
    backgroundColor: COLORS.yellow,

    marginBottom: 10,
  },
});

export default styles;
