import {
  ValidateName,
  ValidateEmail,
  ValidatePassword,
  ValidateMobileNumber
} from "../src/actions/Validations";

test("should return true", () => {
  expect(ValidateName("Dexwin")).toBe(true);
});

test("should return true", () => {
  expect(ValidateEmail("mail@pogakuofie.com")).toBe(true);
});

test("should return true", () => {
  expect(ValidatePassword("qwerty123")).toBe(true);
});

test("should return true", () => {
  expect(ValidateMobileNumber("0505530073")).toBe(true);
});
