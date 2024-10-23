import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  WelcomePage: undefined;
  LoginPage: undefined;
  RegisterPage: undefined;
};

export type WelcomePageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'WelcomePage'
>;

export type LoginPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginPage'
>;

export type RegisterPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RegisterPage'
>;
