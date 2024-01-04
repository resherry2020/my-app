import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const onLayoutRootView = async () => {
    await SplashScreen.hideAsync();
  };

  return <Stack onLayout={onLayoutRootView} />;
};
export default Layout;
