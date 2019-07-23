import { createStackNavigator, createAppContainer } from "react-navigation";

import RealtimeContainer from "../containers/RealtimeContainer";
import FlexibilityContainer from "../containers/FlexibilityContainer";
import EaseContainer from "../containers/EaseContainer";

const OnBoardingItems = createStackNavigator(
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

export default createAppContainer(OnBoardingItems);
