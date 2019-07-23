import { createStackNavigator, createAppContainer } from "react-navigation";

import OnBoardingScreen from "../screens/OnBoardingScreen";
import HomeScreen from "../screens/HomeScreen";
import RealtimeContainer from "../containers/RealtimeContainer";
import FlexibilityContainer from "../containers/FlexibilityContainer";
import EaseContainer from "../containers/EaseContainer";

const OnBoardingScreens = createStackNavigator(
  {
    Realtime: {
      screen: RealtimeContainer,
      navigationOptions: {
        gesturesEnabled: true
      }
    },
    Flexible: {
      screen: FlexibilityContainer,
      navigationOptions: {
        gesturesEnabled: true
      }
    },
    Ease: {
      screen: EaseContainer,
      navigationOptions: {
        gesturesEnabled: true
      }
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

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
