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
import chickenFries from "../assets/images/chickenFries.png";
import eclipse1 from "../assets/images/eclipse1.png";
import subtract from "../assets/images/Subtract.png";
import burger from "../assets/images/burger.png";
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

      <View style={styles.eclipse1Container}>
        <Image source={eclipse1} style={styles.eclipse1Properties} />
      </View>

      <View style={styles.img134Container}>
        <Image source={chickenFries} style={styles.img134Properties} />
      </View>

      <View style={styles.subtractContainer}>
        <Image source={subtract} style={styles.subtractProperties} />
      </View>

      <View style={styles.burgerContainer}>
        <Image source={burger} style={styles.burgerProperties} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Fast, fresh, and on the way.</Text>
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
        <Text style={styles.textUpdateContainer}>Visit us on</Text>

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
    top: 120,
    left: 90,
    width: (600 / 1080) * width,
    height: (500 / 2400) * height,
    zIndex: 1,
  },

  imageProperties: {
    width: "100%",
    height: "100%",
  },

  img134Container: {
    position: "absolute",
    top: 1,
    left: 1,
  },

  img134Properties: {
    width: (1100 / 1080) * width,
    height: (500 / 2400) * height,
  },

  eclipse1Container: {
    position: "absolute",
    top: 1,
    left: 1,
  },

  eclipse1Properties: {
    width: (1100 / 1080) * width,
    height: (300 / 2400) * height,
  },

  subtractContainer: {
    position: "absolute",
    top: 130,
    left: 50,
  },

  subtractProperties: {
    width: (830 / 1080) * width,
    height: (900 / 2400) * height,
  },

  burgerContainer: {
    position: "absolute",
    top: "66%", 
    left: "0%", 
    width: "100%", 
    height: undefined, 
    aspectRatio: 1, 
  },

  burgerProperties: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", 
  },

  textContainer: {
    position: "absolute",
    top: 310,
    alignItems: "center",
  },

  textStyle: {
    fontWeight: "800",
    fontSize: 17,
  },

  buttonContainer: {
    top: "63%",
  },

  loginContainer: {
    marginTop: 10,
  },

  registerContainer: {
    marginTop: 10,
  },

  updateContainer: {
    top: "69%",
  },

  textUpdateContainer: {
    fontSize: 15,
    fontWeight: "400",
    left: "10%",
  },

  socialsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 40,
  },
});

export default WelcomePage;
