import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./prolistcard.style";

const Prolistcard = ({ item, selectedPro, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedPro, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.imgContainer(selectedPro, item)}>
        <Image
          source={{ uri: item.link }}
          resizeMode="contain"
          style={styles.proImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        {item.is_safe ? <Text style={styles.is_safe}>Safe</Text> : null}
        <Text style={styles.info} numberOfLines={1}>
          {item.brand}
        </Text>
        <Text style={styles.proName(selectedPro, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.info}>SPF: {item.spf}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Prolistcard;
