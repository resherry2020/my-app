import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./ProList.style";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

import Procard from "../../common/cards/procard/procard";

const Prolist = () => {
  const router = useRouter();
  const shuffleArray = (array) => {
    // Use the Fisher-Yates algorithm for shuffling
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const { data, isLoading, error } = useFetch();

  shuffleArray(data);
  const selectedItems = data.slice(0, 6);
  const [selectedPro, setSelectedPro] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.id}`);
    setSelectedPro(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Products</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.yellow} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={selectedItems}
            renderItem={({ item }) => (
              <Procard
                item={item}
                selectedJob={selectedPro}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Prolist;