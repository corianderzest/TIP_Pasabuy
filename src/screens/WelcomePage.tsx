import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import sample_logo from "../assets/images/sample_logo.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import Buttons from "../components/Buttons";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import twitterx from "../icons/twitterx.png";

const { height, width } = Dimensions.get("window");

type WelcomePageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "WelcomePage">;
};

const WelcomePage: React.FC<WelcomePageProps> = ({ navigation }) => {
  const redirect = (url: string): void => {
    Linking.openURL(url).catch((err) =>
      console.error("Check if url is valid!", err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={sample_logo} style={styles.imageProperties} />
      </View>

      <View style={styles.img2Container}>
        <Image source={img2} style={styles.img2Properties} />
      </View>

      <View style={styles.img1Container}>
        <Image source={img1} style={styles.img1Properties} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Especially made for TIPians</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.loginContainer}>
          <Buttons
            placeholder="Login"
            backgroundColor="black"
            text_color="white"
            size="xl"
            text_style="bold"
            onPress={() => navigation.navigate("LoginPage")}
          />
        </View>
        <View style={styles.registerContainer}>
          <Buttons
            placeholder="Register"
            backgroundColor="yellow"
            text_color="black"
            size="xl"
            text_style="bold"
            onPress={() => navigation.navigate("RegisterPage")}
          />
        </View>
      </View>

      <View style={styles.updateContainer}>
        <Text style={styles.textUpdateContainer}>For updates visit us at:</Text>

        <View style={styles.socialsContainer}>
          <TouchableWithoutFeedback
            onPress={() => redirect("https://www.facebook.com")}
          >
            <Image source={facebook} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => redirect("https://www.x.com")}
          >
            <Image source={twitterx} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => redirect("https://www.instagram.com")}
          >
            <Image source={instagram} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#F8F7F4",
  },

  imageContainer: {
    position: "absolute",
    top: 100,
    left: 90,
    width: (600 / 1080) * width,
    height: (500 / 2400) * height,
    zIndex: 1,
  },

  imageProperties: {
    width: "100%",
    height: "100%",
  },

  img1Container: {
    position: "absolute",
    top: 1,
    left: 1,
  },

  img1Properties: {
    width: (600 / 1080) * width,
    height: (300 / 2400) * height,
  },

  img2Container: {
    position: "absolute",
    top: 1,
    left: 10,
  },

  img2Properties: {
    width: (650 / 1080) * width,
    height: (300 / 2400) * height,
  },

  textContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
  },

  textStyle: {
    fontWeight: "800",
    fontSize: 17,
  },

  buttonContainer: {
    top: "62%",
  },

  loginContainer: {
    marginTop: 10,
  },

  registerContainer: {
    marginTop: 10,
  },

  updateContainer: {
    top: "75%",
  },

  textUpdateContainer: {
    fontSize: 15,
    fontWeight: "400",
  },

  socialsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 50,
  },
});

export default WelcomePage;
