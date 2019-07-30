import { StackActions, NavigationActions } from "react-navigation";

/** navigates to sign in using the navigation object, reset the stack while doing so
location is hard coded are as the @param {routeName}*/
const GoToSignIn = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignInScreen" })]
  });

  navigation.dispatch(resetAction);
};

//reset password using provided email
const ResetPassword = email => {
  console.log(email);
};

export { ResetPassword };

export { GoToSignIn };
