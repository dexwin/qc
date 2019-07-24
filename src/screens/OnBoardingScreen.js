import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import OnBoardingContainer from "../containers/OnBoardingContainer";
import TabIndicator from "../components/TabIndicator";
import AppStyle from "../config/AppStyle";

import DefaultButton, { TextButton } from "../components/AppButtons";
import GoToHome from "../actions/OnBoardingActions";

class OnBoardingScreen extends Component {
  state = { item: 1, actionLabel: "Next" };
  render() {
    const { navigate } = this.props.navigation;
    const goToHomeHandler = () => {
      GoToHome(navigate);
    };
    const goToNextHandler = () => {
      if (this.state.item === 3) {
        goToHomeHandler();
      } else if (this.state.item === 2) {
        this.setState({ actionLabel: "Setup" });
        this.setState({ item: this.state.item + 1 });
      } else {
        this.setState({ item: this.state.item + 1 });
      }
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
        <View
          style={{
            backgroundColor: AppStyle.colors.dexwinWhite,
            flex: 1
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center"
            }}
          >
            <TextButton callback={goToHomeHandler} label={"Sign In"} />
            <TextButton callback={goToHomeHandler} label={"Skip"} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <OnBoardingContainer item={this.state.item} />
          </View>
          <View
            style={{
              justifyContent: "center",
              paddingBottom: 20,
              flexDirection: "row"
            }}
          >
            <DefaultButton
              callback={goToNextHandler}
              label={this.state.actionLabel}
            />
          </View>
          <TabIndicator
            item={this.state.item}
            style={{ flex: 1, flexDirection: "row" }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoardingScreen;
