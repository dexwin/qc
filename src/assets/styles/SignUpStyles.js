import AppStyles from "../../config/AppStyles";
import TextsStyles from "../styles/TextsStyles";

const SignUpStyles = {
  topSection: {
    padding: AppStyles.sizes.paddingDefault,
    justifyContent: "center"
  },
  termsConditions: {
    fontFamily: AppStyles.fonts.primaryFont
  },
  termsConditionsContainer: {
    flexDirection: "row",
    padding: AppStyles.sizes.paddingDefault
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonView: {
    justifyContent: "center",
    flexDirection: "row",
    padding: AppStyles.sizes.paddingDefault
  },
  signInSection: {
    ...TextsStyles.paragraphText,
    textAlign: "center",
    marginTop: AppStyles.sizes.marginDouble,
    marginBottom: AppStyles.sizes.paddingDefault
  }
};

export default SignUpStyles;
