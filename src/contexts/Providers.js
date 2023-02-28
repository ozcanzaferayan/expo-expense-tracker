import { View, Text } from "react-native";
import React from "react";
import AppProvider from "./AppProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DesktopProvider from "./DesktopProvider";
import FontProvider from "./FontProvider";

const Providers = ({ children }) => {
  return (
    <AppProvider>
      <DesktopProvider>
        <FontProvider>{children}</FontProvider>
      </DesktopProvider>
    </AppProvider>
  );
};

export default Providers;
