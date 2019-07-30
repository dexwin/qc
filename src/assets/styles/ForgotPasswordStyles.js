import AppStyles from "../../config/AppStyles";
import TextsStyles from "./TextsStyles";

const ForgotPasswordStyles = {
  topSection: { justifyContent: "flex-end", flexDirection: "row" },
  bodySection: {
    paddingStart: AppStyles.sizes.paddingDefault,
    paddingEnd: AppStyles.sizes.paddingDefault
  },
  Image: {
    width: "auto",
    height: 100
  },
  messageText: {
    ...TextsStyles.paragraphText,
    marginTop: AppStyles.sizes.marginDouble,
    marginBottom: AppStyles.sizes.marginDefault
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    paddingBottom: AppStyles.sizes.paddingDefault
  },
  buttonSection: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingBottom: AppStyles.sizes.paddingDefault
  }
};

export default ForgotPasswordStyles;
