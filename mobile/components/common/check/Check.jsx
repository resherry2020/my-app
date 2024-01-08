import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, FlatList } from "react-native";
import styles from "./Check.style";

export default function Check() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Our Principles</Text>
            <Text style={styles.modalText}>
              It is estimated that around 14,000 tonnes of sunscreen chemicals
              are washed off swimmers and end up in our oceans each year. Some
              chemicals found in sunscreens are not only harmful to our personal
              health but also have a detrimental effect on reef ecosystems and
              marine life; they damage our delicate coral reefs, cause
              deformities in marine life and they can bioaccumulate, meaning
              they end up in the seafood we eat.
            </Text>
            <Text style={styles.modalText}>
              You should avoid the following ingredients which have been shown
              to harm our oceans:
            </Text>
            <FlatList
              data={[
                { key: "4-methylbenzylidene camphor" },
                { key: "Avobenzone" },
                { key: "Homosalate" },
                { key: "Octocrylene" },
                { key: "Octinoxate" },
                { key: "Oxybenzone" },
                { key: "PABA" },
                { key: "Parabens" },
                { key: "Triclosan" },
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontSize: 15 }}>{`\u2022 ${item.key}`}</Text>
                  </View>
                );
              }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show More</Text>
      </Pressable>
    </View>
  );
}
