import AppStyle from "../../config/AppStyle";

const ButtonStyles = {
  defaultButton: {
    width: 100,
    backgroundColor: AppStyle.colors.primaryColor,
    borderRadius: 1
  },
  textButton: {
    textAlign: "right",
    color: AppStyle.colors.primaryColor,
    fontFamily: AppStyle.fonts.primaryFont,
    padding: 15
  }
};

export default ButtonStyles;
