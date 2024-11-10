import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import star from "../icons/star.png"; 

const { width, height } = Dimensions.get("window");

const CustomerReview: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Star Image */}
      <Image source={star} style={styles.image} />

      {/* Customer Name and Comment */}
      <View style={styles.textContainer}>
        <Text style={styles.customerName}>Customer Name</Text>
        <Text style={styles.comment}>Lorem Ipsum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.5,
  },
  image: {
    width: 59,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flexDirection: "column",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "600",
  },
  comment: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
    color: "#6E6E6E",
  },
});

export default CustomerReview;
