import React from "react";
import { Text } from "react-native";
import { useRoute } from "expo-router";

function Product() {
  const route = useRoute();
  const { id } = route.params;
  return <Text>Details Screen for Product ID: {id}</Text>;
}
export default Product;
