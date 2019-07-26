import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles from "../config/AppStyles";
import { AppContainerStyles } from "../config/AppStyles";
import SignStyles from "../assets/styles/SignStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import { PlainTextInput, PasswordTextInput } from "../components/TextInputs";
import { DefaultButton, TextButton } from "../components/Buttons";
import { GoToSignUp, SignInEmail } from "../actions/SignInActions";
import { ValidateEmail, ValidatePassword } from "../actions/Validations";

class SignInScreen extends Component {
  state = {
    email: "",
    password: "",
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
              Quick Cash
            </Text>
            <Text style={TextsStyles.h1}>Sign In</Text>
            <Text style={TextsStyles.paragraphText}>
              Start managing your business!
            </Text>
          </View>
          <View
            style={{
              paddingStart: AppStyles.sizes.paddingDefault,
              paddingEnd: AppStyles.sizes.paddingDefault
            }}
          >
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
          <TextButton callback={() => {}} label="Forgot Password?" />
          <View style={SignStyles.bottomSection}>
            <View style={SignStyles.buttonView}>
              <DefaultButton
                callback={() => {
                  if (
                    this.state.emailValidated &&
                    this.state.passwordValidated
                  ) {
                    SignInEmail(this.state.email, this.state.password);
                  }
                }}
                label={"Sign In"}
              />
            </View>
            <View>
              <Text style={SignStyles.signSection}>
                Don't have an account?{" "}
                <Text
                  onPress={() => {
                    GoToSignUp(navigation);
                  }}
                  style={{ color: AppStyles.colors.primaryColor }}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
