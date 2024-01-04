import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Inglist, Prolist, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightBlue }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.blue },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.sherry} dimension="80%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Prolist />
          <Inglist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
