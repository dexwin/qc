import { createStackNavigator, createAppContainer } from "react-navigation";

import OnBoardingScreen from "../screens/OnBoardingScreen";
import HomeScreen from "../screens/HomeScreen";

const StartUp = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoardingScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
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
