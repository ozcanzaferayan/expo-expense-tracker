import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Income from "./Income";
import Expense from "./Expense";

const IncomeExpenseContainer = () => {
  return (
    <View style={styles.container}>
      <Income price={"42.500"} />
      <Expense isIncome={false} price={"12.421"} />
    </View>
  );
};

export default IncomeExpenseContainer;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginTop: 38,
  },
});
