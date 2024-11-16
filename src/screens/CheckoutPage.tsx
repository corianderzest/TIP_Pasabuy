import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbar from "../components/BottomNavbar";
import orders from "../icons/order.png"; 
import DeliveryAddress from "../components/DeliveryAddress"; 
import PaymentMethod from "../components/PaymentMethod"; 
import OrderSummary from "../components/OrderSummary"; 

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const CheckoutPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <UpperNavbar title="Checkout" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.checkoutText}>Checkout</Text>
        <Text style={styles.stallName}>Stall Name</Text>
        <DeliveryAddress />
        <PaymentMethod amount="₱500.00" />
        <OrderSummary />
      </ScrollView>

      <View style={{ height: bottomNavbarHeight }}>
        <BottomNavbar
          icon={orders} 
          iconText="Orders" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  checkoutText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginLeft: 16, 
  },
  stallName: {
    fontSize: 16,
    fontWeight: "400", 
    color: "#333",
    marginTop: 10,
    marginLeft: 16, 
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    paddingBottom: bottomNavbarHeight + 16,
  },
});

export default CheckoutPage;
