import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import unsafelist from "./UnsafeList";

let tableData = [];

for (let i = 0; i < unsafelist.length; i++) {
  for (let n of importData) {
    if (n === unsafelist[i][0]) {
      tableData.push(unsafelist[i].slice(1));
    }
  }
}

const Data = {
  tableHead: ["Name", "Description", "Impact"],
  tableData: tableData,
};
const TableTwo = () => {
  const [data, setData] = useState(Data);
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 4, borderColor: "teal" }}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.headText}
        />
        <Rows data={data.tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  head: { height: 44, backgroundColor: "darkblue" },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text: { margin: 6, fontSize: 16, fontWeight: "bold", textAlign: "center" },
});
export default TableTwo;
