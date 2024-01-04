import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./IngList.style";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";

import Ingcard from "../../common/cards/ingcard/ingcard";

const Inglist = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("ingredients");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Unsafe Ingredients</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>{error.message}</Text>
        ) : (
          data?.map((ing) => <Ingcard ing={ing} key={ing.id} />)
        )}
      </View>
    </View>
  );
};

export default Inglist;
