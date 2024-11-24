import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SellerComponent from "../components/SellerComponent";
import request from "../icons/profileicons/request.png";
import history from "../icons/profileicons/history.png";
import BottomNavbar from "../components/BottomBarSeller";
import SearchBar from "../components/SearchBar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type HomeSellerProps = {
  navigation: NativeStackNavigationProp<any>; 
};

function HomeSeller({ navigation }: HomeSellerProps) {
  return (
    <View style={styles.container}>
      <SearchBar 
      placeholder="Search for your order" 
      profilePress={() => {navigation.navigate('SellerProfile')}}/>
        <SellerComponent 
        image={history} 
        placeholder="Delivery History" 
        onPress={() => navigation.navigate("DeliveryHistory")}/>

        <SellerComponent 
        image={request} placeholder="Order Request" 
        onPress={() => navigation.navigate("OrderRequest")}/>

      <View style={styles.bottomBarPositioning}>
        <BottomNavbar 
        onPressDeliveries={() => {navigation.navigate('ForDelivery')}}
        onPressHome={() => {navigation.navigate('HomeSeller')}}
        />
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
