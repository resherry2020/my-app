import unsafelist from "./UnsafeList";
import React from "react";
import { View, ScrollView, Text, Card } from "react-native";
import { Table, Row } from "react-native-table-component";

import styles from "./Output.style";
import { COLORS, FONT, SIZES } from "../../../constants";

function Output({ ing }) {
  const ingMap = {};
  ing.forEach((item) => {
    ingMap[item] = true;
  });

  // Filter the unsafe ingredients based on the provided 'ing' array
  const ing_data = unsafelist
    .filter((item) => ingMap[item[0]])
    .map((item) => [item[1], item[2], item[3]]);

  const data = {
    tableHead: ["Name", "Description", "Impact"],
    widthArr: [100, 200, 250],
    tableData: ing_data,
  };

  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.danger}>Danger: </Text>
        <Text style={styles.text}>
          This sunscreen may pose a threat to marine life. We strongly advise
          against using it while in the ocean.
          <br />
          Click here to view our ingredient analysis for more information.
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: COLORS.dackBlue }}>
            <Row
              data={data.tableHead}
              widthArr={data.widthArr}
              style={styles.head}
              textStyle={styles.headText}
            />
          </Table>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 1, borderColor: "purple" }}>
              {data.tableData.map((rowData, rowIndex) => (
                <Row
                  key={rowIndex}
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
}

export default Output;
