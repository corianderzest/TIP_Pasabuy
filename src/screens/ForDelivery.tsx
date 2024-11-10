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
import BottomNavbar from "../components/BottomNavbar";
import leftArrowIcon from "../icons/arrow.png";
import helpIcon from "../icons/help.png";
import logo from "../icons/Logo.png";
import StoreCustomerInfo from "../components/StoreCustomerInfo";
import CustomerInfoWithMail from "../components/CustomerInfoWithMail";
import Buttons from "../components/Buttons";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const ForDelivery: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Upper Navbar */}
      <View style={styles.navbarContainer}>
        {/* Left Arrow Icon */}
        <TouchableOpacity style={styles.leftArrowContainer}>
          <Image source={leftArrowIcon} style={styles.leftArrowIcon} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.navbarTitle}>For Delivery</Text>

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
        {/* Store and Customer Info */}
        <StoreCustomerInfo />

        {/* Customer Info with Mail */}
        <CustomerInfoWithMail />
      </ScrollView>

      {/* Total and Amount Section */}
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.amountText}>Amount</Text>
      </View>

      {/* Accept Button */}
      <View style={styles.acceptButtonContainer}>
        <Buttons
          placeholder="Arrived at Vendor"
          backgroundColor="black"
          text_style="normal"
          text_color="white"
          size="xxl"
          width={width * 0.8}
          height={50}
          onPress={() => {}}
        />
      </View>

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
    marginLeft: -150,
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
    marginBottom: 16,
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

export default ForDelivery;
