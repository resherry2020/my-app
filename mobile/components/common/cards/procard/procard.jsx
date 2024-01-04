import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./procard.style";

const Procard = ({ item, selectedPro, handleCardPress }) => {
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
      <View style={styles.brandContainer}>
        <Text style={styles.proBrand} numberOfLines={1}>
          {item.brand}
        </Text>
        {item.is_safe ? <Text style={styles.is_safe}>Safe</Text> : null}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedPro, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.spf}>SPF: {item.spf}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Procard;
