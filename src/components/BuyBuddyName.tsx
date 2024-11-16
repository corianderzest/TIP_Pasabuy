import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

type BuyBuddyNameProps = {
  name: string;
};

const BuyBuddyName: React.FC<BuyBuddyNameProps> = ({ name = "" }) => {
  return (
    <View style={styles.container}>
      {/* BuyBuddy Image */}
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
      </View>

      {/* BuyBuddy Name and Reply */}
      <View style={styles.textContainer}>
        <View style={styles.nameReplyContainer}>
          {/* BuyBuddy Name */}
          <Text style={styles.buyBuddyName}>{name}</Text>
        </View>

        {/* Reply */}
        <Text style={styles.reply}>Reply</Text>
      </View>

      {/* Mail Image */}
      <Image source={require("../icons/mail.png")} style={styles.mailIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.5,
    marginTop: 10,
  },
  circleContainer: {
    width: 40,
    height: 40,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2, 
    backgroundColor: "#D3D3D3", 
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
  nameReplyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buyBuddyName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  reply: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6E6E6E",
    marginTop: 4,
  },
  mailIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
});

export default BuyBuddyName;
