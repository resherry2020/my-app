import React from "react";
import { View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";

const TableThree = (props) => {
  const tableData = [];
  for (let i = 0; i < props.ing.length; i++) {
    tableData.push([
      props.ing[i].name,
      props.ing[i].description,
      props.ing[i].impact,
    ]);
  }
  const data = {
    tableHead: ["Name", "Description", "Impact"],
    widthArr: [100, 180, 220],
    tableData: [],
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: "purple" }}>
            <Row
              data={data.tableHead}
              widthArr={data.widthArr}
              style={styles.head}
              textStyle={styles.headText}
            />
          </Table>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 1, borderColor: "purple" }}>
              {data.tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={data.widthArr}
                  style={styles.rowSection}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default TableThree;
