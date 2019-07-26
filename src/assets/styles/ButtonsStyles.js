import AppStyles from "../../config/AppStyles";

const ButtonStyles = {
  defaultButton: {
    width: "auto",
    height: "auto",
    backgroundColor: AppStyles.colors.primaryColor,
    borderRadius: AppStyles.sizes.buttonRadius,
    justifyContent: "center"
  },
  textButton: {
    textAlign: "right",
    color: AppStyles.colors.primaryColor,
    fontFamily: AppStyles.fonts.primaryFont,
    padding: AppStyles.sizes.paddingDefault
  }
};

export default ButtonStyles;
