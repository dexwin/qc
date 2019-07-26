import { StackActions, NavigationActions } from "react-navigation";

//this file exports the various sign up actions as named exports

//navigates to set up using the navigation object, reset the stack while doing so
//location is hard coded are as the parameter `${routeName}`
const GoToSetUp = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SetUpScreen" })]
  });

  navigation.dispatch(resetAction);
};

//navigates to sign in using the navigation object, reset the stack while doing so
//location is hard coded are as the parameter `${routeName}`
const GoToSignIn = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignInScreen" })]
  });

  navigation.dispatch(resetAction);
};

const SignUpEmail = (name, email, password) => {
  console.log(name, email, password);
};

export { SignUpEmail };

export { GoToSignIn };

export { GoToSetUp };
