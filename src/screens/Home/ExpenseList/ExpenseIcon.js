import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getIcon } from "./ExpenseIconHelper";

const ExpenseIcon = ({ category }) => {
  let icon = getIcon(category);
  return (
    <View style={{ ...styles.container, backgroundColor: icon.color + "22" }}>
      <MaterialCommunityIcons
        // @ts-ignore
        name={icon.name}
        size={28}
        color={icon.color}
      />
    </View>
  );
};

export default ExpenseIcon;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
