import React, { Component } from "react";
import { View, Image, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles from "../config/AppStyles";
import { AppContainerStyles } from "../config/AppStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import { PlainTextInput } from "../components/TextInputs";
import Validations from "../actions/Validations";
import { TextButton, DefaultButton } from "../components/Buttons";

class ForgotPasswordScreen extends Component {
  state = { emailValidated: false };
  render() {
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
          <View>
            <TextButton callback={() => {}} label={"Cancel"} />
          </View>
          <View
            style={{
              flex: 1,
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
              callback={() => {}}
              placeholder={"Email"}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "red",
              paddingBottom: AppStyles.sizes.marginDouble
            }}
          >
            <DefaultButton callback={() => {}} label="Send Email" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ForgotPasswordScreen;
