import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./RecomPro.style";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

import Procard from "../../common/cards/procard/procard";

function RecomPro() {
  const router = useRouter();
  const shuffleArray = (array) => {
    // Use the Fisher-Yates algorithm for shuffling
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const { data, isLoading, error } = useFetch("products");
  const List = data.filter((product) => product.is_safe);

  shuffleArray(List);
  const selectedItems = List.slice(0, 4);
  const [selectedPro, setSelectedPro] = useState();

  const handleCardPress = (item) => {
    router.push(`/product/${item.id}`);
    setSelectedPro(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recommend Products</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.yellow} />
        ) : error ? (
          <Text>{error.message}</Text>
        ) : (
          <FlatList
            data={selectedItems}
            renderItem={({ item }) => (
              <Procard
                item={item}
                selected={selectedPro}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
export default RecomPro;
