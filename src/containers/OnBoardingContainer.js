import React from "react";
import RealtimeContainer from "./RealtimeContainer";
import FlexibilityContainer from "./FlexibilityContainer";
import EaseContainer from "./EaseContainer";

//returns a container based on the item number
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
