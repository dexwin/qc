import React from "react";
import { View } from "react-native";
import OnBoardingScreenStyles from "../assets/styles/OnBoardingScreenStyles";
import RealtimeContainer from "./RealtimeContainer";
import FlexibilityContainer from "./FlexibilityContainer";
import EaseContainer from "./EaseContainer";

const OnBoardingContainer = ({ item }) => {
  switch (item) {
    case 1:
      return <RealtimeContainer />;
    case 2:
      return <FlexibilityContainer />;
    case 3:
      return <EaseContainer />;
  }
};

export default OnBoardingContainer;
