import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/WelcomePage";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import RegisterModal from "../screens/RegisterModal";
import LoginModal from "../screens/LoginModal";
import { RootStackParamList } from "./NavigationTypes";
import Homepage from "../screens/Homepage";
import FoodPage from "../screens/FoodPage";
import RatingsReview from "../screens/RatingsReview";
import DeliveryHistory from "../screens/DeliveryHistory";
import OrderRequest from "../screens/OrderRequest";
import DeliveryRequest from "../screens/DeliveryRequest";
import ForDelivery from "../screens/ForDelivery";

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      {
        <Stack.Screen
          name="ForDelivery"
          component={ForDelivery}
          options={{ headerShown: false }}
        />
      }

      {/*<Stack.Screen
          name="DeliveryRequest"
          component={DeliveryRequest}
          options={{ headerShown: false }}
        />
      }


      {/*<Stack.Screen
          name="OrderRequest"
          component={OrderRequest}
          options={{ headerShown: false }}
        />
      }

      {<Stack.Screen
          name="DeliveryHistory"
          component={DeliveryHistory}
          options={{ headerShown: false }}
        />
      }

      {<Stack.Screen
          name="RatingsReview"
          component={RatingsReview}
          options={{ headerShown: false }}
        />
      }

      { <Stack.Screen
          name="HomePage"
          component={Homepage}
          options={{ headerShown: false }}
        />
      }

      {<Stack.Screen
          name="FoodPage"
          component={FoodPage}
          options={{headerShown: false}}
        /> }

        { <Stack.Screen
          name="WelcomePage"
          component={WelcomePage} 
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
          name="RegisterModal"
          component={RegisterModal}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginModal"
          component={LoginModal}
          options={{ headerShown: false }}
        /> */}
    </Stack.Navigator>
  );
};

export default Navigator;
