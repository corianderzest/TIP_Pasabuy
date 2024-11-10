import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import storeImage from "../icons/store.png";
import locationImage from "../icons/location.png";

const StoreCustomerInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Store Information */}
      <View style={styles.storeContainer}>
        <Image
          source={storeImage}
          style={styles.storeImage}
          resizeMode="contain"
        />
        <View style={styles.storeTextContainer}>
          <Text style={styles.storeName}>Store Name</Text>
          <Text style={styles.storeAddress}>Address</Text>
        </View>
      </View>

      {/* Customer Information */}
      <View style={styles.customerContainer}>
        <Image
          source={locationImage}
          style={styles.customerImage}
          resizeMode="contain"
        />
        <View style={styles.customerTextContainer}>
          <Text style={styles.customerName}>Customer Name</Text>
          <Text style={styles.customerAddress}>Address</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.5,
  },
  storeContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  storeImage: {
    width: 35,
    height: 35,
    marginRight: 16,
    borderRadius: 8,
  },
  storeTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  storeName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  storeAddress: {
    fontSize: 14,
    color: "#777",
  },
  customerContainer: {
    flexDirection: "row",
  },
  customerImage: {
    width: 35,
    height: 35, 
    marginRight: 16,
    borderRadius: 25,
  },
  customerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  customerAddress: {
    fontSize: 14,
    color: "#777",
  },
});

export default StoreCustomerInfo;
