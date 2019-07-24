import { StackActions, NavigationActions } from "react-navigation";

const GoToHome = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignInScreen" })]
  });

  navigation.dispatch(resetAction);
};

const GoToSignIn = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignInScreen" })]
  });

  navigation.dispatch(resetAction);
};

const GoToSetUp = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SetUpScreen" })]
  });

  navigation.dispatch(resetAction);
};

const GoToSignUp = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignUpScreen" })]
  });

  navigation.dispatch(resetAction);
};

export { GoToSignUp };

export { GoToSetUp };

export { GoToSignIn };

export { GoToHome };
