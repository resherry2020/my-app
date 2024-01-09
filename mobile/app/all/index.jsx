import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import useFetch from "../../hook/useFetch";
import Procard from "../../components/common/cards/procard/procard";
import Prolistcard from "../../components/common/cards/prolistcard /prolistcard";
import { COLORS, SIZES, icons, FONT } from "../../constants";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";

const proTypes = ["Safe Sunscreen", "SPF 50+", "SPF 30+"];

const AllProducts = () => {
  const router = useRouter();
  const [activeType, setactiveType] = useState("Safe Sunscreen");
  //new
  const { data, isLoading, error } = useFetch("products");

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    // Initially, set filteredDataSource to all products
    setFilteredDataSource(data);
  }, [data]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = data.filter(function (item) {
        const itemBrand = item.brand ? item.brand.toUpperCase() : "";
        const itemTitle = item.title ? item.title.toUpperCase() : "";
        const textData = text.toUpperCase();
        return itemBrand.includes(textData) || itemTitle.includes(textData);
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  const [selectedPro, setSelectedPro] = useState();

  const handleCardPress = (item) => {
    router.push(`/product/${item.id}`);
    setSelectedPro(item.id);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FFF" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),

          headerTitle: "",
        }}
      />

      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Which sunscreen you are looking for?"
        />

        <View style={styles.tabcontainer}>
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
        <View>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.yellow} />
          ) : error ? (
            <Text>{error.message}</Text>
          ) : (
            <FlatList
              data={filteredDataSource}
              renderItem={({ item }) => (
                <Prolistcard
                  item={item}
                  selected={selectedPro}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ columnGap: SIZES.small }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 15,
    borderColor: COLORS.dackBlue,
    backgroundColor: "#FFFFFF",
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    backgroundColor: COLORS.gray,
  },
  itemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabcontainer: {
    marginLeft: 15,
    marginBottom: 10,
  },
});
