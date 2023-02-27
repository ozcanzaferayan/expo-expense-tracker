import { View, Text } from "react-native";
import React from "react";
import Income from "./Income";

const Expense = ({ isIncome = true, price }) => {
  return <Income isIncome={isIncome} price={price} />;
};

export default Expense;
