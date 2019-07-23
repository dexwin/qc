import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import OnBoardingContainer from "../containers/OnBoardingContainer";
import TabIndicator from "../components/TabIndicator";
import AppStyle from "../config/AppStyle";

import DefaultButton, { TextButton } from "../components/AppButtons";
import GoToHome from "../actions/OnBoardingActions";

class OnBoardingScreen extends Component {
  state = {};
  render() {
    const { navigate } = this.props.navigation;
    const goToHomeHandler = () => {
      GoToHome(navigate);
    };
    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={{ backgroundColor: AppStyle.colors.primaryColor, flex: 1 }}
      >
        <StatusBar
          backgroundColor={AppStyle.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={{ backgroundColor: AppStyle.colors.dexwinWhite, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TextButton callback={goToHomeHandler} label={"Skip"} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center"
              // backgroundColor: "green"
            }}
          >
            <OnBoardingContainer />
          </View>
          <View
            style={{
              justifyContent: "center",
              paddingBottom: 20,
              flexDirection: "row"
            }}
          >
            <DefaultButton callback={goToHomeHandler} label={"Next"} />
          </View>
          <TabIndicator style={{ flex: 1, flexDirection: "row" }} />
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoardingScreen;
