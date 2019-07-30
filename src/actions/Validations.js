//validates name provided is at least of length 2
const ValidateName = name => {
  if (name.length >= 2) {
    return true;
  } else {
    return false;
  }
};

//asserts email as valid
const ValidateEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};

//validated password length is at least 6
const ValidatePassword = password => {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
};

//validated mobile number is a valid ghanaian number
const ValidateMobileNumber = number => {
  if (
    (number.substr(0, 3) == "020" ||
      number.substr(0, 3) == "050" ||
      number.substr(0, 3) == "024" ||
      number.substr(0, 3) == "054" ||
      number.substr(0, 3) == "026" ||
      number.substr(0, 3) == "027" ||
      number.substr(0, 3) == "055" ||
      number.substr(0, 3) == "057" ||
      number.substr(0, 3) == "056") &&
    Number.isInteger(parseInt(number))
  ) {
    number = parseInt(number);
    if (number.toString().length === 9) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export { ValidateMobileNumber };

export { ValidatePassword };

export { ValidateEmail };

export { ValidateName };
