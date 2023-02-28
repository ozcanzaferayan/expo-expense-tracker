import { View } from "react-native";

const ExpenseListBackgroundColor = () => {
  return (
    <View
      style={{
        zIndex: -1,
        backgroundColor: "#5434b9",
        height: 200,
        width: "100%",
        position: "absolute",
      }}
    />
  );
};

export default ExpenseListBackgroundColor;
