import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedPro, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedPro === item.id ? COLORS.yellow : COLORS.dackBlue,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  imgContainer: (selectedPro, item) => ({
    width: 200,
    height: 200,
    backgroundColor: selectedPro === item.id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  proImage: {
    width: "90%",
    height: "90%",
  },
  proBrand: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.small / 1.5,
  },
  is_safe: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    backgroundColor: COLORS.yellow,
    color: COLORS.white,
    marginLeft: SIZES.small,
    paddingVertical: SIZES.small / 8,
    paddingHorizontal: SIZES.small,
    borderRadius: 5,
  },
  infoContainer: {
    marginTop: SIZES.small / 2,
  },
  proName: (selectedPro, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedPro === item.id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedPro) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: selectedPro === item.id ? COLORS.white : COLORS.primary,
  }),
  spf: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: 1,
  },
});

export default styles;
