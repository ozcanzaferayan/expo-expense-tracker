import { StyleSheet, View } from "react-native";
import { useMediaQuery } from "react-responsive";

const DesktopProvider = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  if (isDesktop) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={{ width: 600, flex: 1 }}>{children}</View>
      </View>
    );
  }

  return <>{children}</>;
};

export default DesktopProvider;

const styles = StyleSheet.create({});
