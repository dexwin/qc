import { createStackNavigator, createAppContainer } from "react-navigation";

import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import SetUpScreen from "../screens/SetUpScreen";
import HomeScreen from "../screens/HomeScreen";

//Start Up Navigation Start
const StartUp = createStackNavigator(
  {
    //Onboarding Screen
    OnBoardingScreen: {
      screen: OnBoardingScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    //Sign Up Screen
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }, //Sign In Screen
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    //Set Up Screen
    SetUpScreen: {
      screen: SignUpScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    //Home Screen With Contain Child Navigation
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(StartUp);
