import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import peopleImage from "../icons/people.png";
import mailImage from "../icons/mail.png";

const CustomerInfoWithMail: React.FC = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.leftSide}>
          {/* Three men Image */}
          <Image source={peopleImage} style={styles.peopleImage} />

          {/* Customer Info */}
          <View style={styles.textContainer}>
            <Text style={styles.customerName}>BuyBuddy</Text>
            <Text style={styles.message}>Message</Text>
          </View>
        </View>

        {/* Mail Image */}
        <Image source={mailImage} style={styles.mailImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 16,
    padding: 16,
    elevation: 1.5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  peopleImage: {
    width: 30,
    height: 30,
    marginRight: 16,
    borderRadius: 2,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  message: {
    fontSize: 14,
    color: "#777",
  },
  mailImage: {
    width: 35,
    height: 35,
  },
});

export default CustomerInfoWithMail;
