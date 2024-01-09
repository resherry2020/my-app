import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedPro, item) => ({
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: selectedPro === item.id ? COLORS.yellow : COLORS.dackBlue,
    borderRadius: SIZES.small,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gray2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  }),
  imgContainer: (selectedPro, item) => ({
    width: 100,
    height: 100,
    backgroundColor: selectedPro === item.id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.large,
  }),
  proImage: {
    width: "90%",
    height: "90%",
  },

  is_safe: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    backgroundColor: COLORS.yellow,
    color: COLORS.white,
    paddingVertical: SIZES.small / 8,
    paddingHorizontal: SIZES.small,
    borderRadius: 5,
    width: 60,
    marginLeft: SIZES.large,
  },
  infoContainer: {
    marginTop: SIZES.small / 2,
    marginLeft: SIZES.large,
  },
  proName: (selectedPro, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: selectedPro === item.id ? COLORS.white : COLORS.primary,
    marginLeft: SIZES.large,
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

  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  info: {
    fontSize: SIZES.medium,
    fontFamily: "DMRegular",
    color: COLORS.white,
    marginTop: 5,
    textTransform: "capitalize",
    marginLeft: SIZES.large,
  },
});

export default styles;
