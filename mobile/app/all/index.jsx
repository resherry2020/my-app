import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

const proTypes = ["Safe Sunscreen", "SPF 50+", "SPF 30+"];

const AllProducts = () => {
  const router = useRouter();
  //new
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Which sunscreen you are looking for?"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
