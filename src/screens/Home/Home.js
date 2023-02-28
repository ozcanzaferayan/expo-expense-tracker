import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopInfo from "./TopInfo/TopInfo";
import ExpenseList from "./ExpenseList/ExpenseList";
import BottomTab from "../../components/molecules/BottomTab";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container }}>
      <ExpenseList />
      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default Home;
