import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import Inputs from "../components/Inputs";
import sample_logo from "../assets/images/sample_logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/NavigationTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Notification from "../components/Notif";

const { width, height } = Dimensions.get("window");

type LoginPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "LoginPage">;
};

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const loginValidation = () => {
    if (!email) {
      setErrorMessage("Email must be filled");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Email is invalid");
      return false;
    }

    if (!password) {
      setErrorMessage("Password must be filled");
      return false;
    }

    return true;
  };

  const loginUser = async () => {
    setErrorMessage("")
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful");
        setEmail("");
        setPassword("");
        navigation.navigate("LoginModal");
      } catch (error: any) {
        setErrorMessage(error.message);
        console.log("Login unsuccessful: ", error.message);
      }
    
  };

  const slideAnimLeft = useRef(new Animated.Value(-width)).current;
  const slideAnimUp = useRef(new Animated.Value(+width)).current;

  useEffect(() => {
    Animated.timing(slideAnimLeft, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnimLeft]);

  useEffect(() => {
    Animated.timing(slideAnimUp, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnimUp]);  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={styles.positioningContainer}>
        {visible && <Notification message={errorMessage} />}

        <View style={styles.imagePosition}>
          <Animated.View
            style={[styles.imageContainer, { transform: [{ translateX: slideAnimLeft }] }]}
          >
            <Image source={sample_logo} style={styles.imageProperties} />
          </Animated.View>
        </View>

        <Animated.View style={{ transform: [{ translateY: slideAnimUp }] }}>
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Welcome Back TIPian!</Text>

            <View style={styles.subheaderContainer}>
              <Text style={styles.subheadingText}>
                Sign in to continue, make sure to avoid typographical errors and
                check for caps lock.
              </Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputSpacing}>
              <View style={styles.inputStyling}>
                <Inputs
                  placeholder="Enter your email"
                  type="account"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
            </View>

            <View style={styles.inputSpacing}>
              <View style={styles.inputStyling}>
                <Inputs
                  placeholder="Enter your password"
                  type="account"
                  value={password}
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyling}>
                <Buttons
                  placeholder="Login"
                  backgroundColor="yellow"
                  text_color="black"
                  text_style="bold"
                  size="custom"
                  onPress={loginUser}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.forgotContainer}>
            <Text style={styles.forgotProps}>Forgot Password?</Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#F8F7F4",
    alignItems: "center",
    left: "2%",
  },

  positioningContainer: {
    top: "26%",
  },

  imagePosition: {
    alignItems: "center",
  },

  imageContainer: {
    position: "absolute",
    bottom: "100%",
  },

  imageProperties: {
    width: (600 / 1080) * width,
    height: (500 / 2400) * height,
  },

  textContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },

  subheaderContainer: {
    marginTop: 2,
    paddingRight: 40,
  },

  headingText: {
    fontSize: 27,
    fontWeight: "900",
  },

  subheadingText: {
    fontSize: 15,
    fontWeight: "400",
  },

  inputContainer: {
    left: "5%",
    top: "1%",
    marginVertical: 12,
  },

  inputStyling: {
    elevation: 3,
    borderRadius: 8,
    width: (822 / 1080) * width,
    height: (128 / 2400) * height,
  },

  inputSpacing: {
    marginBottom: 12,
  },

  buttonContainer: {
    left: "55.5%",
    top: "0%",
  },

  buttonStyling: {},

  forgotContainer: {
    left: "6%",
    top: "-9%",
  },

  forgotProps: {
    fontWeight: "400",
    fontSize: 15,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    color: "black",
  },
});

export default LoginPage;
