import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbar from "../components/BottomNavbar";
import orders from "../icons/order.png";
import logo from "../icons/Logo.png";
import OrderSummary from "../components/OrderSummary";
import BuyBuddyName from "../components/BuyBuddyName";

const { width, height } = Dimensions.get("window");
const bottomNavbarHeight = 60;

const YourOrderPage: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Upper Navbar */}
      <UpperNavbar title="Your Order" />

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        {/* Estimated Delivery Time Section */}
        <View style={styles.estimatedDeliveryContainer}>
          <Text style={styles.estimatedDeliveryText}>
            Estimated Delivery Time
          </Text>
          <Text style={styles.timeMinsText}>Time Mins</Text>
        </View>

        {/* Divider */}
        <View style={styles.boldDivider} />

        {/* Message */}
        <Text style={styles.statusMessage}>
          Preparing your food. Your BuyBuddy will pick it up when it’s ready.
        </Text>

        {/* Order Summary Component */}
        <OrderSummary />

        {/* BuyBuddy Name Section */}
        <BuyBuddyName name={"BuyBuddy Name"} />
      </ScrollView>

      {/* Total Amount Section - Moved outside the ScrollView */}
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total Amount</Text>
        <Text style={styles.totalAmountValue}>₱500.00</Text>
      </View>

      {/* Bottom Navbar */}
      <View style={styles.bottomNavbarContainer}>
        <BottomNavbar icon={orders} iconText="Orders" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginTop: 60, 
    paddingBottom: 120, 
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  estimatedDeliveryContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  estimatedDeliveryText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
  },
  timeMinsText: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  boldDivider: {
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    marginVertical: -30,
    marginBottom: 9,
  },
  statusMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#6E6E6E",
    marginBottom: 10,
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: "absolute",
    bottom: bottomNavbarHeight,
    left: 0,
    right: 0,
    marginBottom: 30,
  },
  totalAmountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalAmountValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  bottomNavbarContainer: {
    height: bottomNavbarHeight,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default YourOrderPage;
