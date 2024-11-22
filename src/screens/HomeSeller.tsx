import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SellerComponent from "../components/SellerComponent";
import request from "../icons/profileicons/request.png";
import history from "../icons/profileicons/history.png";
import BottomNavbar from "../components/BottomBarSeller";
import SearchBar from "../components/SearchBar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomeSellerProps = {
  navigation: NativeStackNavigationProp<any>; 
};

function HomeSeller({ navigation }: HomeSellerProps) {
  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search for your order" />
      <TouchableOpacity onPress={() => navigation.navigate("DeliveryHistory")}>
        <SellerComponent image={history} placeholder="Delivery History" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("OrderRequest")}>
        <SellerComponent image={request} placeholder="Order Request" />
      </TouchableOpacity>

      <View style={styles.bottomBarPositioning}>
        <BottomNavbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  bottomBarPositioning: {
    bottom: "-61%",
  },
});

export default HomeSeller;
