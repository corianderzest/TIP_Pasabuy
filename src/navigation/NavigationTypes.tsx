import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  WelcomePage: undefined;
  LoginPage: undefined;
  RegisterPage: undefined;
  RegisterModal: undefined;
  LoginModal: undefined;
  HomePage: undefined;
  DrinksPage: undefined;
  FoodPage: undefined;
  RatingsReview: undefined;
  DeliveryHistory: undefined;
  OrderRequest: undefined;
  DeliveryRequest: undefined;
  ForDelivery: undefined;
  AboutPage: undefined;
  ProfilePage: undefined;
  HomeSeller: undefined;
  StallsPage: undefined;
  CartPage: undefined;
  CheckoutPage: undefined;
};

export type WelcomePageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WelcomePage"
>;

export type LoginPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LoginPage"
>;

export type LoginModalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LoginModal"
>;

export type RegisterPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RegisterPage"
>;

export type RegisterModalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RegisterModal"
>;

export type HomePageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomePage"
>;

export type DrinksPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DrinksPage"
>;

export type FoodPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FoodPage"
>;

export type RatingsReviewNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RatingsReview"
>;

export type DeliveryHistoryNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DeliveryHistory"
>;

export type OrderRequestNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OrderRequest"
>;

export type DeliveryRequestNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DeliveryRequest"
>;

export type ForDeliveryNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForDelivery"
>;

export type AboutPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AboutPage"
>;

export type ProfilePageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProfilePage"
>;

export type HomeSellerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeSeller"
>;

export type StallsPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "StallsPage"
>;

export type CartPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CartPage"
  >;

  export type CheckoutPagegNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "CheckoutPage"
  >;