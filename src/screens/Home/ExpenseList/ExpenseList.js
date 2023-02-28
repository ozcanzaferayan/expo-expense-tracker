import { FlatList, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppProvider";
import ExpenseListItem from "./ExpenseListItem";
import { LinearGradient } from "expo-linear-gradient";
import TopInfo from "../TopInfo/TopInfo";
import ExpenseListBackgroundColor from "./ExpenseListBackgroundColor";
import ExpenseListHeader from "./ExpenseListHeader";

const ExpenseList = () => {
  const app = useContext(AppContext);
  return (
    <>
      <FlatList
        style={{ ...styles.list }}
        contentInset={{}}
        contentContainerStyle={{ backgroundColor: "white", paddingBottom: 24 }}
        data={app?.expenses}
        bounces={true}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <ExpenseListHeader />}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => {
          return <ExpenseListItem data={item} />;
        }}
      />
      <ExpenseListBackgroundColor />
    </>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginBottom: 100,
  },
});
