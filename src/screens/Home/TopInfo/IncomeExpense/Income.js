import { View, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Text from "../../../../components/atoms/Text";

const Income = ({ isIncome = true, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          name={`arrow-${isIncome ? "down-left" : "up-right"}`}
          size={16}
          color={`${isIncome ? "#05b28c" : "#f92155"}`}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{isIncome ? "INCOME" : "EXPENSE"}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

export default Income;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#00000066",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  textContainer: {
    marginTop: 2,
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
  },
  price: {
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 18,
  },
});
