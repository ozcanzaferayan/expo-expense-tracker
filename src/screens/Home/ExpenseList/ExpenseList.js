import { FlatList, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppProvider";
import ExpenseListItem from "./ExpenseListItem";
import { LinearGradient } from "expo-linear-gradient";
import TopInfo from "../TopInfo/TopInfo";
import ExpenseListBackgroundColor from "./ExpenseListBackgroundColor";

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
        ListHeaderComponent={() => (
          <>
            <LinearGradient
              colors={["#5434b9", "#8f4fd6"]}
              style={styles.background}
            />
            <TopInfo />
          </>
        )}
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
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 328,
  },
});
