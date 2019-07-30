import React, { Component } from "react";
import { View, Text, StatusBar, Select } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles, { AppContainerStyles } from "../config/AppStyles";
import TextsStyles from "../assets/styles/TextsStyles";
import SetUpStyles from "../assets/styles/SetUpStyles";
import { PlainTextInput } from "../components/TextInputs";
import { DefaultButton } from "../components/Buttons";
import { ValidateMobileNumber, ValidateName } from "../actions/Validations";
import { FinishSetUp } from "../actions/SetUpActions";

class SetUpScreen extends Component {
  state = {
    businessNameValidated: false,
    phoneNumberValidated: false,
    businessTypeValidated: false
  };
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
          <View style={SetUpStyles.topSection}>
            <Text
              style={{
                ...TextsStyles.logo,
                marginBottom: AppStyles.sizes.marginDouble
              }}
            >
              Quick Cash
            </Text>
            <Text style={TextsStyles.h1}>Set Up</Text>
            <Text style={TextsStyles.paragraphText}>
              Set up your business account.
            </Text>
          </View>
          <View style={{ padding: AppStyles.sizes.paddingDefault }}>
            <PlainTextInput
              validated={this.state.businessNameValidated}
              callback={businessName => {
                this.setState({
                  businessName,
                  businessNameValidated: ValidateName(businessName)
                });
              }}
              placeholder={"Business Name"}
            />
            <PlainTextInput
              keyboardType={"numeric"}
              validated={this.state.phoneNumberValidated}
              callback={phoneNumber => {
                this.setState({
                  phoneNumber,
                  phoneNumberValidated: ValidateMobileNumber(phoneNumber)
                });
              }}
              placeholder={"Mobile Number"}
            />
            <PlainTextInput
              validated={this.state.businessTypeValidated}
              callback={businessType => {
                this.setState({
                  businessType,
                  businessTypeValidated: ValidateName(businessType)
                });
              }}
              placeholder={"Business Type"}
            />
          </View>
          <View style={SetUpStyles.bottomSection}>
            <View style={SetUpStyles.buttonSection}>
              <DefaultButton
                callback={() => {
                  if (
                    this.state.businessNameValidated &&
                    this.state.phoneNumberValidated &&
                    this.state.businessTypeValidated
                  ) {
                    FinishSetUp(
                      this.state.businessName,
                      this.state.phoneNumber,
                      this.state.businessType
                    );
                  }
                }}
                label={"Finish"}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SetUpScreen;
