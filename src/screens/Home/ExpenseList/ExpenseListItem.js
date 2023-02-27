import { StyleSheet, View } from "react-native";
import React from "react";
import ExpenseIcon from "./ExpenseIcon";
import Text from "../../../components/atoms/Text";
import { DateTime } from "luxon";

const ExpenseListItem = ({
  data: { id, category, title, price, date, isIncome },
}) => {
  return (
    <View style={styles.container}>
      <ExpenseIcon category={category} />
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {DateTime.fromISO(date).setLocale("en-gb").toFormat("MMM dd 'at' t")}
        </Text>
      </View>
      <Text
        style={{ ...styles.price, color: isIncome ? "#05b28c" : "#f92155" }}
      >
        {isIncome ? "+" : "-"} ${price}
      </Text>
    </View>
  );
};

export default ExpenseListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    shadowColor: "#000000CC",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  texts: {
    flex: 1,
    marginStart: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "400",
    color: "#000000CC",
  },
  date: {
    marginTop: 8,
    color: "#00000077",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
