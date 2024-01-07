import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    //justifyContent: "center",
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
  },
  infoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  proBrand: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontFamily: FONT.bold,
  },
  proSPF: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontFamily: FONT.bold,
    marginLeft: 10,
  },
});

export default styles;
