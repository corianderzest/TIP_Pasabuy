import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import React from "react";
import deliveries from "../icons/deliveries.png";
import home from "../icons/home.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

interface BottomNavbarProps {
  onPress?: () => void;
  placeholder?: string;
  icon?: any;
  iconText?: string;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({
  placeholder,
  icon,
  iconText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Deliveries Icon */}
        <TouchableOpacity style={styles.deliveriesWrapper}>
          <Image style={styles.deliveriesIcon} source={icon || deliveries} />
          <Text style={styles.iconText}>{iconText || "Deliveries"}</Text>
        </TouchableOpacity>

        {/* Home Icon */}
        <TouchableOpacity style={styles.homeWrapper}>
          <Image style={styles.homeIcon} source={home} />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
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
    bottom: '-12%',
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },

  deliveriesWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  homeWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  deliveriesIcon: {
    width: 38,
    height: 33,
  },

  homeIcon: {
    width: 38,
    height: 32,
    marginBottom: 1,
  },

  iconText: {
    fontSize: 13,
    textAlign: "center",
  },

  placeholderText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginTop: 10,
  },
});

export default BottomNavbar;
