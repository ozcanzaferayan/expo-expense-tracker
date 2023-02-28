import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./BottomTab/Icon";

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" title="Home" active={true} />
      <Icon name="grid" title="Category" />
      <Icon name="plus" title="Add" />
      <Icon name="pie-chart" title="Chart" />
      <Icon name="user" title={"Profile"} />
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#fafdff",
    borderTopWidth: 1,
    borderTopColor: "#0000000a",
    paddingVertical: 12,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
