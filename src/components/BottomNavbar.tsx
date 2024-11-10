import { View, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import deliveries from "../icons/deliveries.png";
import home from "../icons/home.png";

const { width, height } = Dimensions.get("window");

interface BottomNavbarProps {
  onPress?: () => void;
}

const BottomNavbar: React.FC<BottomNavbarProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.positioning}>
        <View style={styles.iconContainer}>
          <Image style={styles.deliveriesIcon} source={deliveries} />
        </View>

        <View style={styles.iconContainer}>
          <Image style={styles.imageProps} source={home} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3C623",
    width: "100%",
    height: (205 / 2400) * height,
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },

  positioning: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "93%",
    paddingHorizontal: "5%",
  },

  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  deliveriesIcon: {
    width: 48,
    height: 48,
    marginLeft: 8,
  },

  imageProps: {
    width: 41,
    height: 35,
  },
});

export default BottomNavbar;
