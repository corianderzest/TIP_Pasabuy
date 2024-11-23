import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import locationImage from "../icons/location.png";

const { width, height } = Dimensions.get("window");

type TransactionProps = {
  transactionID?: string,
  address?: string,
  date?: any,
  amount: number,
}


const TransactionHistory: React.FC<TransactionProps> = ({
  transactionID,
  address,
  date,
  amount,
}) => {
  return (
    <View style={styles.container}>
      <Image source={locationImage} style={styles.locationImage} />

      <View style={styles.textContainer}>
        <View style={styles.nameAmountContainer}> 

          <Text style={styles.customerName}>{transactionID}</Text>

          <Text style={styles.amount}>₱{amount}</Text>
        </View>

        <Text style={styles.address}>{address}</Text>

        <Text style={styles.deliveryDate}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 12,
    elevation: 1.5,
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

  locationImage: {
    width: 40,
    height: 42,
    marginRight: 13,
    marginTop: 11,
  },

  customerName: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  address: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
    color: "#6E6E6E",
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    right: '30%',
    top: '8%',
  },
  deliveryDate: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
    color: "#6E6E6E",
  },
});

export default TransactionHistory;
