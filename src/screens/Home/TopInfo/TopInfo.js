import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/atoms/Text";
import IncomeExpenseContainer from "./IncomeExpense/IncomeExpenseContainer";

const TopInfo = () => {
  return (
    <View style={styles.container}>
      <Text>CURRENT BALANCE</Text>
      <Text style={styles.balance}>
        <Text style={styles.balanceSign}>$</Text>
        32,465
      </Text>
      <Text style={styles.date}>September 2018</Text>
      <IncomeExpenseContainer />
    </View>
  );
};

export default TopInfo;

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    alignItems: "center",
  },
  balance: {
    marginTop: 16,
    fontSize: 48,
  },
  balanceSign: {
    fontSize: 32,
  },
  date: {
    marginTop: 8,
  },
});
