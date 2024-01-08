import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: COLORS.dackBlue,
    marginBottom: 25,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: COLORS.dackBlue,
    alignItems: "center",
    marginTop: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: SIZES.large,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default styles;
