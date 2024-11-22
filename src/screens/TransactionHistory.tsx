import React from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbarSeller from "../components/BottomBarSeller";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionComponent from "../components/TransactionComponent";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const TransactionHistory: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Navbar */}
      <UpperNavbar title="Transaction History" />

      {/* Content Section with Description */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Description Text */}
        <Text style={styles.description}>
          See past delivery and transaction.
        </Text>

        {/* Transaction Components */}
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        
        {/* Add more TransactionComponent as needed */}
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomNavbarContainer}>
        <BottomNavbarSeller />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },

  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginVertical: 16,
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
    marginBottom: 80,
    paddingHorizontal: 16,
    paddingTop: 35,
  },
  bottomNavbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: (205 / 2400) * height,
  },
});

export default TransactionHistory;
