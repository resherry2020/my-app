import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { COLORS, SIZES } from "../../constants";
import unsafelist from "./UnsafeList";

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    const importData = props.data;

    let tableData = [];

    for (let i = 0; i < unsafelist.length; i++) {
      for (let n of importData) {
        if (n === unsafelist[i][0]) {
          tableData.push(unsafelist[i].slice(1));
        }
      }
    }

    this.state = {
      tableHead: ["Name", "Description", "Impact"],
      tableData: tableData,
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.Label}>Caution!</Text>
        <Text style={styles.info}>
          This Sunscreen May Pose A Threat To Marine Life. <br />
          We Strongly Advise Against Its Use While In The Ocean.
          <br />
          Unsafe Ingredients Include:
        </Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: COLORS.dackBlue }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
            flexArr={[1, 2, 3]}
          />
          <Rows
            data={state.tableData}
            textStyle={styles.text}
            flexArr={[1, 2, 3]}
          />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: COLORS.lightBlue },
  text: { margin: 6 },
  info: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 5,
    marginBottom: 5,
    textTransform: "capitalize",
  },
  Label: {
    fontSize: SIZES.large,
    fontFamily: "DMRegular",
    backgroundColor: COLORS.yellow,
    color: COLORS.gray,
    paddingVertical: SIZES.small / 8,
    paddingHorizontal: SIZES.small,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
});
