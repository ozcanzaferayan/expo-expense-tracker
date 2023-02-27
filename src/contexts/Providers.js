import { View, Text } from "react-native";
import React from "react";
import AppProvider from "./AppProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Providers = ({ children }) => {
  return (
    <AppProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </AppProvider>
  );
};

export default Providers;
