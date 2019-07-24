import AppStyle from "../../config/AppStyle";

const ButtonStyles = {
  defaultButton: {
    width: "auto",
    height: "auto",
    backgroundColor: AppStyle.colors.primaryColor,
    borderRadius: 1,
    justifyContent: "center"
  },
  textButton: {
    textAlign: "right",
    color: AppStyle.colors.primaryColor,
    fontFamily: AppStyle.fonts.primaryFont,
    padding: 15
  }
};

export default ButtonStyles;
