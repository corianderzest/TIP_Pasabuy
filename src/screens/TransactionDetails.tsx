import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomNavbar from "../components/BottomBarSeller";
import leftArrowIcon from "../icons/arrow.png";
import helpIcon from "../icons/help.png";
import logo from "../icons/Logo.png";
import TDetailsComponent from "../components/TDetailsComponent";
import OrderSummary from "../components/OrderSummary";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const TransactionDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Upper Navbar */}
      <View style={styles.navbarContainer}>
        {/* Left Arrow Icon */}
        <TouchableOpacity style={styles.leftArrowContainer}>
          <Image source={leftArrowIcon} style={styles.leftArrowIcon} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.navbarTitle}>Transaction Details</Text>

        {/* Help Icon */}
        <TouchableOpacity style={styles.helpContainer}>
          <Image source={helpIcon} style={styles.helpIcon} />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        {/* Transaction Number */}
        <View style={styles.transactionNumberContainer}>
          <Text style={styles.TransactionNumber}>Transaction Number</Text>
        </View>

        {/* Delivery Date */}
        <Text style={styles.deliveryDate}>Delivery Date</Text>

        {/* Transaction Details */}
        <TDetailsComponent />

        {/* Order Summary */}
        <OrderSummary />

        {/* Total Amount Section */}
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalText}>Total Amount:</Text>
          <Text style={styles.amountText}>$100.00</Text> 
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={{ height: bottomNavbarHeight }}>
        <BottomNavbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  navbarContainer: {
    backgroundColor: "#F3C623",
    width: "100%",
    height: navbarHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  leftArrowContainer: {
    position: "absolute",
    left: 15,
  },
  leftArrowIcon: {
    width: 25,
    height: 25,
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1,
    marginLeft: -90, // Adjust this for better centering
  },
  helpContainer: {
    position: "absolute",
    right: 15,
  },
  helpIcon: {
    width: 40,
    height: 40,
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginTop: navbarHeight,
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
  transactionNumberContainer: {
    alignItems: "center",
    marginBottom: 8, 
  },
  TransactionNumber: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  deliveryDate: {
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
    marginBottom: 90,
    marginTop: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 20,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginRight: 20,
  },

  acceptButtonContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 25,
    alignItems: "center",
  },
});

export default TransactionDetails;
