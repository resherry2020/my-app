import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgBox: {
    width: 380,
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  Img: {
    width: "80%",
    height: "80%",
  },
  proTitleBox: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  proTitle: {
    fontSize: SIZES.large,
    marginTop: SIZES.small - 5,
    color: COLORS.dackBlue,
    fontFamily: FONT.bold,
    justifyContent: "center",
    textAlign: "center",
  },
  proBrand: {
    fontSize: SIZES.medium,
    color: COLORS.blue,
    fontFamily: FONT.medium,
    fontFamily: FONT.bold,
  },
  proSPF: {
    fontSize: SIZES.medium,
    color: COLORS.blue,
    fontFamily: FONT.medium,
    marginTop: SIZES.small - 5,
    fontFamily: FONT.bold,
  },
});

export default styles;
