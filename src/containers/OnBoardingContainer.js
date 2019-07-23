import React from "react";
import { View } from "react-native";
import OnBoardingScreen from "../assets/styles/OnBoardingScreen";
import RealtimeContainer from "./RealtimeContainer";
import FlexibilityContainer from "./FlexibilityContainer";
import EaseContainer from "./EaseContainer";

const OnBoardingContainer = () => {
  return (
    <View style={OnBoardingScreen.MainView}>
      <FlexibilityContainer />
    </View>
  );
};

export default OnBoardingContainer;
