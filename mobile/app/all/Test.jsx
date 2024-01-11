import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef } from "react";
import { COLORS, SIZES, icons, FONT } from "../../constants";
import { Button, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Check } from "./check";

export default function Test() {
  // State to hold the selected image
  const [image, setImage] = useState(null);

  // State to hold extracted text
  const [extractedText, setExtractedText] = useState("");

  //show the extracted text
  const [isUploaded, setUploaded] = useState(false);

  //show the check output
  const [isoutput, setOutput] = useState(false);
  const showOutput = () => {
    setOutput(true);
  };

  useEffect(() => {
    // Request camera permissions when the component mounts
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
    }
  };
  // Function to pick an image from the
  // device's gallery
  const pickImageGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      allowsMultipleSelection: false,
    });
    if (!result.canceled) {
      // Perform OCR on the selected image
      performOCR(result.assets[0]);

      // Set the selected image in state
      setImage(result.assets[0].uri);
    }
  };

  // Function to capture an image using the
  // device's camera
  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      allowsMultipleSelection: false,
    });
    if (!result.canceled) {
      // Perform OCR on the captured image
      // Set the captured image in state
      performOCR(result.assets[0]);
      setImage(result.assets[0].uri);
    }
  };

  const inputRef = useRef();
  const pickImageWeb = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const uri = URL.createObjectURL(file);
      setImage(uri);
      performOCR(file);
      setUploaded(true);
    }
  };

  // Function to perform OCR on an image
  // and extract text
  const performOCR = (file) => {
    let myHeaders = new Headers();
    myHeaders.append(
      "apikey",

      // ADDD YOUR API KEY HERE
      "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"
    );
    myHeaders.append("Content-Type", "multipart/form-data");

    let raw = file;
    let requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };

    // Send a POST request to the OCR API
    fetch("https://api.apilayer.com/image_to_text/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Set the extracted text in state
        setExtractedText(result["all_text"]);
      })
      .catch((error) => console.log("error", error));
  };

  const renderPickImageButton = () => {
    if (Platform.OS === "web") {
      return (
        <>
          <input
            ref={inputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button title="Pick an image" onPress={pickImageWeb} />
        </>
      );
    } else {
      return (
        <>
          <Button
            title="Pick an image from gallery"
            onPress={pickImageGallery}
          />
          <Button title="Pick an image from camera" onPress={pickImageCamera} />
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to GeeksforGeeks</Text>
      <Text style={styles.heading2}>Image to Text App</Text>
      {renderPickImageButton()}
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 400,
            height: 300,
            objectFit: "contain",
          }}
        />
      )}
      <Text style={styles.text1}>Extracted text:</Text>
      <Text style={styles.text1}>{extractedText}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 15,
    backgroundColor: COLORS.yellow,
  },
  text1: {
    fontSize: 16,
    margin: 15,
    color: "black",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    margin: 15,
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#FFF",
  },
});
