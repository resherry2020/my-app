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

function ProDetails() {
  const { id } = useGlobalSearchParams();
  const { data, isLoading, error, refetch } = useFetchDetails("products", id);

  return (
    <View>
      <Text>{data.title}</Text>
      {/* {data[0].is_safe ? null : <unsafeTable ing={data} />} */}
    </View>
  );
}

export default ProDetails;
