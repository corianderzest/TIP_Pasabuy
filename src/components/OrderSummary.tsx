import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const OrderSummary: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Product ABC</Text>
        <Text style={styles.price}>$100</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Product DEF</Text>
        <Text style={styles.price}>$200</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Product GHI</Text>
        <Text style={styles.price}>$300</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 14,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    marginVertical: 16,
    alignSelf: "center",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.5, 
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 4,
  },
  itemName: {
    fontSize: 13,
    fontWeight: "400",
    flex: 1,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "right",
  },
});

export default OrderSummary;
