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
          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <TextButton
              callback={() => {
                GoToSignIn(navigation);
              }}
              label={"Cancel"}
            />
          </View>
          <View
            style={{
              paddingStart: AppStyles.sizes.paddingDefault,
              paddingEnd: AppStyles.sizes.paddingDefault
            }}
          >
            <Image
              style={{
                width: "auto",
                height: 100
              }}
              source={require("../assets/images/my_password.png")}
            />
            <Text style={TextsStyles.h1}>Reset Password</Text>
            <Text
              style={{
                ...TextsStyles.paragraphText,
                marginTop: AppStyles.sizes.marginDouble,
                marginBottom: AppStyles.sizes.marginDefault
              }}
            >
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
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "flex-end",
              flexDirection: "row",
              paddingBottom: AppStyles.sizes.paddingDefault
            }}
          >
            <View
              style={{
                justifyContent: "flex-end",
                alignContent: "flex-end",
                paddingBottom: AppStyles.sizes.paddingDefault
              }}
            >
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
