import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./ingcard.style";

const Ingcard = ({ ing }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: ing.imglink }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.ingName} numberOfLines={1}>
          {ing.name}
        </Text>

        <Text style={styles.inginfo}>Description: {ing.description}</Text>

        <Text style={styles.inginfo}>Impact: {ing.impact}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Ingcard;
