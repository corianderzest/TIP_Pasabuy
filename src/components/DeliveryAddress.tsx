import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import locationImage from "../icons/location.png";

const { width, height } = Dimensions.get("window");

const DeliveryAddress: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Location Image */}
      <Image source={locationImage} style={styles.locationImage} />

      {/* Delivery Address and Location */}
      <View style={styles.textContainer}>
        <View style={styles.nameAmountContainer}>
          {/* Delivery Address */}
          <Text style={styles.customerName}>Delivery Address</Text>
        </View>

        {/* Address */}
        <Text style={styles.address}>Address</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
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
    marginTop: 5,
  },
  locationImage: {
    width: 35,
    height: 37,
    marginRight: 9,
    marginTop: 5,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
  nameAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },
  customerName: {
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
  },
  address: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: 4,
    color: "#6E6E6E",
  },
});

export default DeliveryAddress;
