import React, { Component } from "react";
import { View, Image, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles from "../config/AppStyles";
import { AppContainerStyles } from "../config/AppStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import { PlainTextInput } from "../components/TextInputs";
import { ValidateEmail } from "../actions/Validations";
import { TextButton, DefaultButton } from "../components/Buttons";
import { GoToSignIn } from "../actions/ForgotPasswordActions";
import ForgotPasswordStyles from "../assets/styles/ForgotPasswordStyles";

class ForgotPasswordScreen extends Component {
  state = { emailValidated: false };
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
          <View style={ForgotPasswordStyles.topSection}>
            <TextButton
              callback={() => {
                GoToSignIn(navigation);
              }}
              label={"Cancel"}
            />
          </View>
          <View style={ForgotPasswordStyles.bodySection}>
            <Image
              style={ForgotPasswordStyles.Image}
              source={require("../assets/images/my_password.png")}
            />
            <Text style={TextsStyles.h1}>Reset Password</Text>
            <Text style={ForgotPasswordStyles.messageText}>
              Enter the email you used during registration.
            </Text>
            <PlainTextInput
              validated={this.state.emailValidated}
              callback={email => {
                this.setState({
                  email,
                  emailValidated: ValidateEmail(email)
                });
              }}
              placeholder={"Email"}
            />
          </View>
          <View style={ForgotPasswordStyles.bottomSection}>
            <View style={ForgotPasswordStyles.buttonSection}>
              <DefaultButton
                callback={() => {
                  if (this.state.emailValidated) {
                    ResetPassword(this.state.email);
                  }
                }}
                label="Send Email"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ForgotPasswordScreen;
