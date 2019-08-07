import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SetUpScreen from "../screens/SetUpScreen";
import HomeScreen from "../screens/HomeScreen";
import TopTabNavigation from "./TopTabNavigation";

///entry point of the app's navigation stack

//start Up navigation start
const StartUp = createStackNavigator({
  // //onboarding screen
  // OnBoardingScreen: {
  //   screen: OnBoardingScreen,
  //   navigationOptions: {
  //     gesturesEnabled: false
  //   }
  // },

  // //sign up screen
  // SignUpScreen: {
  //   screen: SignUpScreen,
  //   navigationOptions: {
  //     gesturesEnabled: false
  //   }
  // },

  // //sign In screen
  // SignInScreen: {
  //   screen: SignInScreen,
  //   navigationOptions: {
  //     gesturesEnabled: false
  //   }
  // },

  // //set up screen
  // SetUpScreen: {
  //   screen: SetUpScreen,
  //   navigationOptions: {
  //     gesturesEnabled: false
  //   }
  // },

  // //forgot password screen
  // ForgotPasswordScreen: {
  //   screen: ForgotPasswordScreen,
  //   navigationOptions: {
  //     gesturesEnabled: false
  //   }
  // },

  //home screen with contain child navigation
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
});

export default createAppContainer(StartUp);
