import React from "react";
import { Text } from "react-native";
import { useRoute } from "expo-router";

function Table() {
  const route = useRoute();
  const { id } = route.params;
  return <Text>Details Screen for Product ID: {id}</Text>;
}
export default Table;
