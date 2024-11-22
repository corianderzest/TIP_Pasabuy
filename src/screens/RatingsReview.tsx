import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import UpperNavbar from "../components/UpperNavbar"; 
import BottomNavbar from "../components/BottomBarSeller"; 
import CustomerReview from "../components/CustomerReview"; 

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60; 

const RatingsReview: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Upper Navbar */}
      <UpperNavbar title="Ratings & Reviews" />

      {/* Content Section with Description and CustomerReview */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Description Text */}
        <Text style={styles.description}>
          See what customers think of your service and improve your performance.
        </Text>

        {/* CustomerReview Components */}
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
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
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginVertical: 30,
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    paddingBottom: bottomNavbarHeight + 16, 
    alignItems: "center",
  },
});

export default RatingsReview;
