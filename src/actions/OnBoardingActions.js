import { StackActions, NavigationActions } from "react-navigation";

//this file exports the various onboarding actions as named exports

//navigates to home using the navigation object, reset the stack while doing so
//location is hard coded are as the parameter `${routeName}`
const GoToHome = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignInScreen" })]
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

//navigates to sign up using the navigation object, reset the stack while doing so
//location is hard coded are as the parameter `${routeName}`
const GoToSignUp = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignUpScreen" })]
  });

  navigation.dispatch(resetAction);
};

export { GoToSignUp };

export { GoToSignIn };

export { GoToHome };
