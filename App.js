import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Providers from "./src/contexts/Providers";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
