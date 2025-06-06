import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Modal,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/NavigationTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import popUpImage from "../assets/images/PopUpImage.png";
import modal_background from "../assets/images/modal_background.jpg";
import HomePage from "./HomePage";

type LoginModalProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "LoginModal">;
};

const LoginModal: React.FC<LoginModalProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.popUpOrientation}>
      <View style={styles.popUpContainer}>
        <View style={styles.popUpHeaderContainer}>
          <Text style={styles.popUpHeaderText}>Hello There!</Text>
        </View>

        <View style={styles.popUpImageContainer}>
          <Image source={popUpImage} style={styles.popUpImageProps} />
        </View>

        <View style={styles.popUpTextContainer}>
          <Text style={styles.popUpTextProps}>
            Click whether you are a Seller or a Customer
          </Text>
        </View>

        <View style={styles.popUpButtonContainer}>
          <Buttons
            placeholder="Seller"
            backgroundColor="black"
            text_color="white"
            text_style="bold"
            size="custom"
            onPress={() => navigation.navigate("HomeSeller")}
          />

          <Buttons
            placeholder="Customer"
            backgroundColor="black"
            text_color="white"
            text_style="bold"
            size="custom"
            onPress={() => {
              console.log("redirect to login failed?");
              navigation.navigate("HomePage");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  popUpOrientation: {
    alignItems: "center",
    top: "27%",
  },

  popUpContainer: {
    width: "65%",
    height: "58%",
    backgroundColor: "#F8F7F4",
    borderRadius: 8,
    elevation: 5,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
  },

  popUpHeaderContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 5,
    borderWidth: 0.2,
  },

  popUpHeaderText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },

  popUpImageContainer: {
    alignItems: "center",
    top: "5%",
  },

  popUpImageProps: {
    resizeMode: "contain",
    height: "55%",
    width: "55%",
  },

  popUpButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 22,
    bottom: "7.5%",
  },

  popUpTextContainer: {
    alignItems: "center",
    bottom: "13%",
    paddingHorizontal: "7%",
  },

  popUpTextProps: {
    fontSize: 13,
    textAlign: "center",
  },
});

export default LoginModal;