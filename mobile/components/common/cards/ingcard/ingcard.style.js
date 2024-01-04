import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "90%",
    height: "90%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },

  ingName: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.dackBlue,
  },
  inginfo: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 5,
    textTransform: "capitalize",
  },
});

export default styles;
