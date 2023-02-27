import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../atoms/Text";
import { Feather } from "@expo/vector-icons";

const Icon = ({ name = "home", title = "Home", active = false }) => {
  const activeColor = "#3e52e2";
  const inactiveColor = "#3e52e277";
  const color = active ? activeColor : inactiveColor;
  return (
    <View style={styles.container}>
      {title === "Add" ? (
        <View style={{ ...styles.plus, borderColor: activeColor }}>
          <Feather name={name} size={32} color={activeColor} />
        </View>
      ) : (
        <>
          <Feather name={name} size={26} color={color} />
          <Text style={{ color: color }}>{title}</Text>
        </>
      )}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 4,
  },
  plus: {
    padding: 4,
    borderWidth: 1.5,
    borderRadius: 10,
  },
});
