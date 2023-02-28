import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/atoms/Text";
import IncomeExpenseContainer from "./IncomeExpense/IncomeExpenseContainer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

const TopInfo = () => {
  return (
    <View
      style={{ ...styles.container, paddingTop: Constants.statusBarHeight }}
    >
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
    alignItems: "center",
    paddingBottom: 38,
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
