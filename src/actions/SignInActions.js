import { StackActions, NavigationActions } from "react-navigation";

const GoToSignUp = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignUpScreen" })]
  });

  navigation.dispatch(resetAction);
};

const SignInEmail = (email, password) => {
  console.log(email, password);
};

export { SignInEmail };

export { GoToSignUp };
