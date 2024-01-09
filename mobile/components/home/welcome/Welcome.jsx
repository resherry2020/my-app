import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import styles from "./Welcome.style";
import { icons, SIZES } from "../../../constants";

const proTypes = ["Safe Sunscreen", "SPF 50+", "SPF 30+"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeType, setactiveType] = useState("Safe Sunscreen");

  return (
    <View>
      <View style={styles.container}>
        <Text>Hello Sherry</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            styles={styles.searchInput}
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            placeholder="Which sunscreen you are looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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
              onPress={() => {
                setactiveType(item);
                router.push(`/search/${item}`);
              }}
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
