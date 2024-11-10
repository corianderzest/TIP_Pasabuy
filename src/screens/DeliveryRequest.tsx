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
import Buttons from "../components/Buttons";
import OrderSummary from "../components/OrderSummary";
import PaymentMethod from "../components/PaymentMethod";
import leftArrowIcon from "../icons/arrow.png";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const DeliveryRequest: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Upper Navbar */}
      <View style={styles.navbarContainer}>
        {/* Left Arrow Icon */}
        <TouchableOpacity style={styles.leftArrowContainer}>
          <Image source={leftArrowIcon} style={styles.leftArrowIcon} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.navbarTitle}>Delivery Request</Text>

        {/* Decline Button */}
        <View style={styles.buttonContainer}>
          <Buttons
            placeholder="Decline"
            backgroundColor="red"
            text_style="normal"
            text_color="white"
            size="medium"
            width={120}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Customer Name and Address */}
        <View style={styles.customerInfoContainer}>
          <Text style={styles.customerName}>Customer Name</Text>
          <Text style={styles.address}>Address</Text>
        </View>

        <View style={styles.whiteContainer}></View>

        {/* Order Summary Section */}
        <OrderSummary />

        {/* Payment Method Component */}
        <PaymentMethod amount="Amount" />
      </ScrollView>

      {/* Total and Amount Section */}
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.amountText}>Amount</Text>
      </View>

      {/* Accept Button */}
      <View style={styles.acceptButtonContainer}>
        <Buttons
          placeholder="Accept"
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
    marginLeft: -120,
  },
  buttonContainer: {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: [{ translateY: -13 }],
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    paddingBottom: bottomNavbarHeight + 16,
    alignItems: "center",
  },
  customerInfoContainer: {
    alignItems: "flex-start",
    width: (900 / 1080) * width,
    marginVertical: 8,
  },
  customerName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
    marginTop: 16,
  },
  address: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6E6E6E",
  },
  whiteContainer: {
    width: (900 / 1080) * width,
    height: (100 / 1080) * height,
    backgroundColor: "#FFFFFF",
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
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

export default DeliveryRequest;
