import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import OnBoardingContainer from "../containers/OnBoardingContainer";
import TabIndicators from "../components/TabIndicators";
import AppStyles, { AppContainerStyles } from "../config/AppStyles";
import OnBoardingStyles from "../assets/styles/OnBoardingStyles";

import { TextButton, DefaultButton } from "../components/Buttons";
import { GoToSignIn, GoToSignUp } from "../actions/OnBoardingActions";

//onboarding screen with walk through and sign in, sign up, skip actions
class OnBoardingScreen extends Component {
  state = { item: 1, actionLabel: "Next" };

  render() {
    //navigation object passed by react navigation
    const navigation = this.props.navigation;

    // walk through handler also goes to sign up after walk through
    const goToNextHandler = () => {
      if (this.state.item === 3) {
        GoToSignUp(navigation);
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
        style={AppContainerStyles.SafeAreaStyle}
      >
        <StatusBar
          backgroundColor={AppStyles.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={AppContainerStyles.MainView}>
          <View style={OnBoardingStyles.TopSectionView}>
            <TextButton
              callback={() => {
                GoToSignIn(navigation);
              }}
              label={"Sign In"}
            />
            <TextButton
              callback={() => {
                GoToSignUp(navigation);
              }}
              label={"Skip"}
            />
          </View>
          <View style={OnBoardingStyles.ContainerView}>
            <OnBoardingContainer item={this.state.item} />
          </View>
          <View style={OnBoardingStyles.ButtonView}>
            <DefaultButton
              callback={goToNextHandler}
              label={this.state.actionLabel}
            />
          </View>
          <TabIndicators item={this.state.item} />
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoardingScreen;
