const ValidateName = name => {
  if (name.length >= 2) {
    return true;
  } else {
    return false;
  }
};

const ValidateEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};

const ValidatePassword = password => {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
};

export { ValidatePassword };

export { ValidateEmail };

export { ValidateName };
