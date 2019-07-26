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

const ValidateEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};

const ValidateName = name => {
  if (name.length >= 2) {
    return true;
  } else {
    return false;
  }
};

const ValidatePassword = password => {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
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

const SignUpEmail = {};

export { SignUpEmail };

export { GoToSignIn };

export { ValidatePassword };

export { ValidateName };

export { ValidateEmail };

export { GoToSetUp };
