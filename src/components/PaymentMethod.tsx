import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

type PaymentMethodProps = {
  amount: string;
};

const PaymentMethod: React.FC<PaymentMethodProps> = ({ amount }) => {
  return (
    <View style={styles.container}>
      {/* Payment Method Name */}
      <Text style={styles.paymentMethodText}>Payment Method</Text>

      {/* Payment Method Value and Amount */}
      <View style={styles.rowContainer}>
        <Text style={styles.paymentMethodValue}>Cash</Text>
        <Text style={styles.amountValue}>{amount || "₱0.00"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (900 / 1080) * width,
    padding: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.5,
  },
  paymentMethodText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  paymentMethodValue: {
    fontSize: 15,
    fontWeight: "400",
    color: "#6E6E6E",
    flex: 1,
  },
  amountValue: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "right",
    color: "#333",
  },
});

export default PaymentMethod;
