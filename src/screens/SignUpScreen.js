import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-navigation";
import AppStyles from "../config/AppStyles";
import { AppContainerStyles } from "../config/AppStyles";
import SignUpStyles from "../assets/styles/SignUpStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import { PlainTextInput, PasswordTextInput } from "../components/TextInputs";
import OpenURL from "../actions/OpenURL";
import { DefaultButton, TextButton } from "../components/Buttons";
import {
  ValidateEmail,
  ValidateName,
  ValidatePassword,
  GoToSignIn
} from "../actions/SignUpActions";

class SignUpScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    emailValidated: false,
    nameValidated: false,
    passwordValidated: false,
    checked: false
  };
  render() {
    const { checked } = this.state;
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
          <View style={SignUpStyles.topSection}>
            <Text
              style={{
                ...TextsStyles.logo,
                marginBottom: AppStyles.sizes.marginDouble
              }}
            >
              Quick Cash
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
          <View style={SignUpStyles.termsConditionsContainer}>
            <View
              style={{
                borderColor: "red",
                borderWidth: 1
              }}
            >
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: !checked });
                }}
              />
            </View>

            <Text
              style={{
                ...TextsStyles.paragraphText,
                alignSelf: "center"
              }}
              onPress={() => {
                this.setState({ checked: !checked });
              }}
            >
              Accept{" "}
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
          <View style={SignUpStyles.bottomSection}>
            <View style={SignUpStyles.buttonView}>
              <DefaultButton callback={() => {}} label={"Sign Up"} />
            </View>
            <View>
              <Text
                onPress={() => {
                  GoToSignIn(navigation);
                }}
                style={SignUpStyles.signInSection}
              >
                Have an account?{" "}
                <Text style={{ color: AppStyles.colors.primaryColor }}>
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
