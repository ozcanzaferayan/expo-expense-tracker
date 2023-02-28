import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopInfo from "./TopInfo/TopInfo";
import ExpenseList from "./ExpenseList/ExpenseList";
import BottomTab from "../../components/molecules/BottomTab";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <LinearGradient
        colors={["#5434b9", "#8f4fd6"]}
        style={styles.background}
      />
      <TopInfo />
      <ExpenseList />
      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 328,
  },
});
export default Home;
