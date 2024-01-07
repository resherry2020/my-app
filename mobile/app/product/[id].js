import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import unsafeTable from "../../components/prodetails/unsafeTable";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { COLORS, icons, SIZES } from "../../constants";
import useFetchDetails from "../../hook/useFetchDetails";
import { ScreenHeaderBtn, Output, Product, RecomPro } from "../../components";

function ProDetails() {
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetchDetails("products", id);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {};

  // Assuming data.prohibited_ingredients is an array
  let import_ing = Array.isArray(data.prohibited_ingredients)
    ? data.prohibited_ingredients
      ? data.prohibited_ingredients.map((item) => item.trim())
      : []
    : [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightBlue }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightBlue },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.blue} />
          ) : error ? (
            <Text>{error.message}</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Product
                link={data.link}
                title={data.title}
                brand={data.brand}
                spf={data.spf}
              />
              <Output />

              {import_ing.length > 0
                ? import_ing.map((item) => <Text key={item}>{item}</Text>)
                : null}

              <RecomPro />
            </View>
          )}
        </ScrollView>
      </>
      <></>
      {/* {data[0].is_safe ? null : <unsafeTable ing={data} />} */}
    </SafeAreaView>
  );
}

export default ProDetails;
