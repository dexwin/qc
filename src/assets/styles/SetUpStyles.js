import AppStyles from "../../config/AppStyles";
import TextsStyles from "./TextsStyles";

const SetUpStyles = {
  topSection: {
    padding: AppStyles.sizes.paddingDefault,
    justifyContent: "center"
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

export default SetUpStyles;
