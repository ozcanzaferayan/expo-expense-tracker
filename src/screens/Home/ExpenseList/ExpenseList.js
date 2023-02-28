import { FlatList, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppProvider";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = () => {
  const app = useContext(AppContext);
  return (
    <FlatList
      style={styles.list}
      contentInset={{ bottom: 8 }}
      data={app?.expenses}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      renderItem={({ item }) => {
        return <ExpenseListItem data={item} />;
      }}
    />
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  list: {
    marginTop: 26,
    marginBottom: 100,
  },
});
