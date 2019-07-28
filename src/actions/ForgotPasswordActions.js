import { StackActions, NavigationActions } from "react-navigation";

const GoToSignIn = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignInScreen" })]
  });

  navigation.dispatch(resetAction);
};

const ResetPassword = email => {
  console.log(email, password);
};

export { ResetPassword };

export { GoToSignIn };
