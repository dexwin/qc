import React from "react";
import { View } from "react-native";

import OnBoardingStyles from "../assets/styles/OnBoardingStyles";

const TabIndicators = ({ item }) => {
  let one;
  let two;
  let three;

  switch (item) {
    case 1: {
      one = OnBoardingStyles.TabIndicatorActive;
      two = OnBoardingStyles.TabIndicatorNotActive;
      three = OnBoardingStyles.TabIndicatorNotActive;
      break;
    }
    case 2: {
      one = OnBoardingStyles.TabIndicatorNotActive;
      two = OnBoardingStyles.TabIndicatorActive;
      three = OnBoardingStyles.TabIndicatorNotActive;
      break;
    }
    case 3: {
      one = OnBoardingStyles.TabIndicatorNotActive;
      two = OnBoardingStyles.TabIndicatorNotActive;
      three = OnBoardingStyles.TabIndicatorActive;
      break;
    }
  }
  return (
    <View style={OnBoardingStyles.TabIndicatorView}>
      <View style={one} />
      <View style={two} />
      <View style={three} />
    </View>
  );
};

export default TabIndicators;
