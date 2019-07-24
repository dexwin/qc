import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import OnBoardingContainer from "../containers/OnBoardingContainer";
import TabIndicator from "../components/TabIndicator";
import AppStyle, { AppContainerStyle } from "../config/AppStyle";
import OnBoardingScreenStyles from "../assets/styles/OnBoardingScreenStyles";

import DefaultButton, { TextButton } from "../components/AppButtons";
import {
  GoToHome,
  GoToSignIn,
  GoToSetUp,
  GoToSignUp
} from "../actions/OnBoardingActions";

//onboarding screen with walk through and sign in, sign up, skip actions
class OnBoardingScreen extends Component {
  state = { item: 1, actionLabel: "Next" };

  render() {
    //navigation object passed by react navigation
    const navigation = this.props.navigation;

    //home screen action handler
    const goToHomeHandler = () => {
      GoToHome(navigation);
    };

    //sign in screen action handler
    const goToSignInHandler = () => {
      GoToSignIn(navigation);
    };

    //set up screen action handle
    const goToSetUpHandler = () => {
      GoToSetUp(navigation);
    };

    //sign up screen action handle
    const goToSignUpHandler = () => {
      GoToSignUp(navigation);
    };

    // walk through handler also goes to sign up after walk through
    const goToNextHandler = () => {
      if (this.state.item === 3) {
        goToSignUpHandler();
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
        style={AppContainerStyle.SafeAreaStyle}
      >
        <StatusBar
          backgroundColor={AppStyle.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={OnBoardingScreenStyles.MainView}>
          <View style={OnBoardingScreenStyles.TopSectionView}>
            <TextButton callback={goToSignInHandler} label={"Sign In"} />
            <TextButton callback={goToSignUpHandler} label={"Skip"} />
          </View>
          <View style={OnBoardingScreenStyles.ContainerView}>
            <OnBoardingContainer item={this.state.item} />
          </View>
          <View style={OnBoardingScreenStyles.ButtonView}>
            <DefaultButton
              callback={goToNextHandler}
              label={this.state.actionLabel}
            />
          </View>
          <TabIndicator item={this.state.item} />
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoardingScreen;
