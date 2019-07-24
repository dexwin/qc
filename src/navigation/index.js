import { createStackNavigator, createAppContainer } from "react-navigation";

import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import SetUpScreen from "../screens/SetUpScreen";
import HomeScreen from "../screens/HomeScreen";

///entry point of the app's navigation stack

//start Up navigation start
const StartUp = createStackNavigator(
  {
    //onboarding screen
    OnBoardingScreen: {
      screen: OnBoardingScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    //sign up screen
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }, //sign In screen
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    //set up screen
    SetUpScreen: {
      screen: SetUpScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    //home screen with contain child navigation
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
