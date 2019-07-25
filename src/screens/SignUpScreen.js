import React, { Component } from "react";
import { View, Text, StatusBar, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyle, { AppContainerStyle } from "../config/AppStyles";
import SignUpStyles from "../assets/styles/SignUpStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import { PlainTextInput, PasswordTextInput } from "../components/TextInputs";
import {
  ValidateEmail,
  ValidateName,
  ValidatePassword
} from "../actions/SignUpActions";

class SignUpScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    emailValidated: false,
    nameValidated: false,
    passwordValidated: false
  };
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={AppContainerStyle.SafeAreaStyle}
      >
        <StatusBar
          backgroundColor={AppStyle.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={AppContainerStyle.MainView}>
          <View style={SignUpStyles.TopSectionView}>
            <Text
              style={{
                ...TextsStyles.logo,
                marginBottom: AppStyle.sizes.marginDouble
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
              paddingStart: AppStyle.sizes.paddingDefault,
              paddingEnd: AppStyle.sizes.paddingDefault
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
                this.setState({ email, emailValidated: ValidateEmail(email) });
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
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
