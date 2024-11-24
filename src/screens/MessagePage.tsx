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
import BottomNavbar from "../components/BottomBarSeller";
import orders from "../icons/order.png";
import logo from "../icons/Logo.png";
import OrderSummary from "../components/OrderSummary";
import BuyBuddyName from "../components/BuyBuddyName";
import {collection, getDocs, doc, getDoc,} from "firebase/firestore"
import { firestoreDB } from "../backend/firebaseInitialization";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import order from "../icons/order.png"

const { width, height } = Dimensions.get("window");
const bottomNavbarHeight = 60;

const YourOrderPage: React.FC = () => {






  return (
    <View style={styles.container}>

      <UpperNavbar title="Message BuyBuddy" />

      <ScrollView contentContainerStyle={styles.contentContainer}>

      </ScrollView>




     

      <View style={styles.bottomNavbarContainer}>
        <BottomNavbar 
        deliveriesIcon={order}
        deliveriesText="Orders" 
        />
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

  bottomNavbarContainer: {
    height: bottomNavbarHeight,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default YourOrderPage;
