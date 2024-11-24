import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/WelcomePage";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import RegisterModal from "../screens/RegisterModal";
import LoginModal from "../screens/LoginModal";
import { RootStackParamList } from "./NavigationTypes";
import HomePage from "../screens/HomePage";
import DrinksPage from "../screens/DrinksPage";
import RatingsReview from "../screens/RatingsReview";
import DeliveryHistory from "../screens/DeliveryHistory";
import OrderRequest from "../screens/OrderRequest";
import DeliveryRequest from "../screens/DeliveryRequest";
import ForDelivery from "../screens/ForDelivery";
import FoodPage from "../screens/FoodPage";
import AboutPage from "../screens/AboutPage";
import ProfilePage from "../screens/ProfilePage";
import HomeSeller from "../screens/HomeSeller";
import StallsPage from "../screens/StallsPage";
import CartPage from "../screens/CartPage";
import CheckoutPage from "../screens/CheckoutPage";
import YourOrderPage from "../screens/YourOrderPage";
import TransactionHistory from "../screens/TransactionHistory";
import TransactionDetails from "../screens/TransactionDetails";
import SellerProfile from '../screens/SellerProfile'
import MessagePage from '../screens/MessagePage'

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CartPage"
        component={CartPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CheckoutPage"
        component={CheckoutPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="YourOrderPage"
        component={YourOrderPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="StallsPage"
        component={StallsPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomeSeller"
        component={HomeSeller}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AboutPage"
        component={AboutPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MessagePage"
        component={MessagePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SellerProfile"
        component={SellerProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForDelivery"
        component={ForDelivery}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DeliveryRequest"
        component={DeliveryRequest}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="OrderRequest"
        component={OrderRequest}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DeliveryHistory"
        component={DeliveryHistory}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RatingsReview"
        component={RatingsReview}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DrinksPage"
        component={DrinksPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FoodPage"
        component={FoodPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterModal"
        component={RegisterModal}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginModal"
        component={LoginModal}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
