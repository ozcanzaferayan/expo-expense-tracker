import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppContext, AppSetterContext } from "../../../contexts/AppProvider";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = () => {
  const setApp = useContext(AppSetterContext);
  const app = useContext(AppContext);
  console.log(app.expenses);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={app.expenses}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => {
          return <ExpenseListItem data={item} />;
        }}
      />
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
  },
  list: {
    paddingBottom: 16,
  },
});
