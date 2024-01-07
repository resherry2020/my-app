import { Text, View, Image } from "react-native";
import styles from "./Product.style";

import { icons } from "../../../constants";

function Product({ link, title, brand, spf }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          key={link}
          source={{
            uri: link
              ? link
              : "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          resizeMode="contain"
          style={styles.Img}
        />
      </View>
      <View style={styles.proTitleBox}>
        <Text style={styles.proBrand}>{brand}</Text>
        <Text style={styles.proTitle}>{title}</Text>

        <Text style={styles.proSPF}>SPF: {spf}</Text>
      </View>
    </View>
  );
}
export default Product;
