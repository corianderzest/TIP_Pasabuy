import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import close from "../icons/close.png";
import help from "../icons/help.png";

const { width, height } = Dimensions.get("window");

interface UpperNavbarProps {
  title?: string;
}

const UpperNavbar: React.FC<UpperNavbarProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.positioning}>
        <View style={styles.closeContainer}>
          <Image style={styles.closeIcon} source={close} />
        </View>

        {title && <Text style={styles.textProps}>{title}</Text>}

        <View style={styles.helpContainer}>
          <Image style={styles.imageProps} source={help} />
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
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },

  positioning: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: "5%",
  },

  closeContainer: {
    position: "absolute",
    left: 5,
  },

  helpContainer: {
    position: "absolute",
    right: 10,
  },

  closeIcon: {
    width: 15,
    height: 15,
  },

  imageProps: {
    width: 40,
    height: 40,
  },

  textProps: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 20,
  },
});

export default UpperNavbar;
