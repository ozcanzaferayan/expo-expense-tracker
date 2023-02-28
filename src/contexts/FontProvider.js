import { View } from "react-native";
import { useCallback } from "react";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const FontProvider = ({ children }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      {children}
    </View>
  );
};

export default FontProvider;
