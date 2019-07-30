import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles from "../config/AppStyles";
import { AppContainerStyles } from "../config/AppStyles";
import SignStyles from "../assets/styles/SignStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import { PlainTextInput, PasswordTextInput } from "../components/TextInputs";
import OpenURL from "../actions/OpenURL";
import { DefaultButton } from "../components/Buttons";
import { GoToSignIn, SignUpEmail } from "../actions/SignUpActions";
import {
  ValidateName,
  ValidateEmail,
  ValidatePassword
} from "../actions/Validations";

class SignUpScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameValidated: false,
    emailValidated: false,
    passwordValidated: false
  };
  render() {
    const { navigation } = this.props;
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
          <View style={SignStyles.topSection}>
            <Text
              style={{
                ...TextsStyles.logo,
                marginBottom: AppStyles.sizes.marginDouble
              }}
            >
              Quick Cash Logo
            </Text>
            <Text style={TextsStyles.h1}>Sign Up</Text>
            <Text style={TextsStyles.paragraphText}>
              Let us create an account first!
            </Text>
          </View>
          <View
            style={{
              paddingStart: AppStyles.sizes.paddingDefault,
              paddingEnd: AppStyles.sizes.paddingDefault
            }}
          >
            <PlainTextInput
              callback={name => {
                this.setState({ name, nameValidated: ValidateName(name) });
              }}
              validated={this.state.nameValidated}
              placeholder={"Name"}
            />
            <PlainTextInput
              callback={email => {
                this.setState({
                  email,
                  emailValidated: ValidateEmail(email)
                });
              }}
              validated={this.state.emailValidated}
              placeholder={"Email"}
            />
            <PasswordTextInput
              callback={password => {
                this.setState({
                  password,
                  passwordValidated: ValidatePassword(password)
                });
              }}
              placeholder={"Password"}
              validated={this.state.passwordValidated}
            />
          </View>
          <View style={SignStyles.termsConditionsContainer}>
            <Text
              style={{
                ...TextsStyles.paragraphText,
                alignSelf: "center"
              }}
            >
              By Signing up you agree to our{" "}
              <Text
                style={{ color: AppStyles.colors.primaryColor }}
                onPress={() => {
                  OpenURL("https://www.dexwin.net");
                }}
              >
                Terms &amp; Conditions
              </Text>
              .
            </Text>
          </View>
          <View style={SignStyles.bottomSection}>
            <View style={SignStyles.buttonView}>
              <DefaultButton
                callback={() => {
                  if (
                    this.state.nameValidated &&
                    this.state.emailValidated &&
                    this.state.passwordValidated
                  ) {
                    SignUpEmail(
                      this.state.name,
                      this.state.email,
                      this.state.password
                    );
                  }
                }}
                label={"Sign Up"}
              />
            </View>
            <View>
              <Text style={SignStyles.signSection}>
                Have an account?{" "}
                <Text
                  onPress={() => {
                    GoToSignIn(navigation);
                  }}
                  style={{ color: AppStyles.colors.primaryColor }}
                >
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
