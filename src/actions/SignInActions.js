import { StackActions, NavigationActions } from "react-navigation";

//navigates to sign up using the navigation object, reset the stack while doing so
//location is hard coded are as the parameter `${routeName}`
const GoToSignUp = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignUpScreen" })]
  });

  navigation.dispatch(resetAction);
};

//signs in user using provided email and password
const SignInEmail = (email, password) => {
  console.log(email, password);
};

//navigates to forgot password using the navigation object, reset the stack while doing so
//location is hard coded are as the parameter `${routeName}`
const GotToForgotPassword = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "ForgotPasswordScreen" })]
  });

  navigation.dispatch(resetAction);
};

export { GotToForgotPassword };

export { SignInEmail };

export { GoToSignUp };
