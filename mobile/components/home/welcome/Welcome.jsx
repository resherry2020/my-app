import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./Welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";

const proTypes = ["Safe Sunscreen", "SPF 50+", "SPF 30+"];

const Welcome = () => {
  const router = useRouter();
  const [activeType, setactiveType] = useState("Safe Sunscreen");

  return (
    <View>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            styles={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Which sunscreen you are looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={proTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeType, item)}
              onPress={() => {}}
            >
              <Text style={styles.tabText(activeType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
