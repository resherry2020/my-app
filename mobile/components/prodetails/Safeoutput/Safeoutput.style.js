import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  reassurance: {
    margin: 4,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.white,
  },
  text: {
    margin: 4,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  textcontainer: {
    borderRadius: 4,
    padding: 4,
    backgroundColor: COLORS.blue,
    marginBottom: 10,
  },
});

export default styles;
