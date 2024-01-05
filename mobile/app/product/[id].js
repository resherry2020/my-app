import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import ExampleTwo from "../../components/prodetails/ExampleTwo";

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

function ProDetails() {
  const { id } = useGlobalSearchParams();
  const { data, isLoading, error, refetch } = useFetchDetails("products", id);

  return (
    <View>
      <Text>{data.title}</Text>

      {/* {!data.is_safe && <ExampleTwo data={data.prohibited_ingredients} />} */}
    </View>
  );
}

export default ProDetails;
