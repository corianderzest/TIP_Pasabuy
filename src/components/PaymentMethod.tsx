import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import paymentMethodImage from "../icons/paymentMethod.png"; // Change this to your payment method image

const { width, height } = Dimensions.get("window");

type PaymentMethodProps = {
  amount: string;
};

const PaymentMethod: React.FC<PaymentMethodProps> = ({ amount }) => {
  return (
    <View style={styles.container}>
      {/* Payment Method Image */}
      <Image source={paymentMethodImage} style={styles.paymentMethodImage} />

      {/* Payment Method and Amount */}
      <View style={styles.textContainer}>
        <View style={styles.nameAmountContainer}>
          {/* Payment Method */}
          <Text style={styles.paymentMethod}>Payment Method</Text>
        </View>

        {/* Cash */}
        <View style={styles.amountContainer}>
          <Text style={styles.cash}>Cash</Text>
          <Text style={styles.amountValue}>{amount || "₱0.00"}</Text>
        </View>
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
  paymentMethodImage: {
    width: 32,
    height: 30,
    marginRight: 13,
    marginTop: 13,
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
  paymentMethod: {
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 4,
  },
  cash: {
    fontSize: 13,
    fontWeight: "400",
    color: "#6E6E6E",
  },
  amountValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
});

export default PaymentMethod;
