import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TopInfo from "../TopInfo/TopInfo";

const ExpenseListHeader = () => {
  return (
    <>
      <LinearGradient
        colors={["#5434b9", "#8f4fd6"]}
        style={styles.background}
      />
      <TopInfo />
    </>
  );
};

export default ExpenseListHeader;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 328,
  },
});
