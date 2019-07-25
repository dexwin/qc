import AppStyle from "../../config/AppStyles";

const OnBoardingStyles = {
  TopSectionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  ContainerView: {
    flex: 1,
    justifyContent: "center",
    padding: AppStyle.sizes.paddingDefault,
    paddingTop: AppStyle.sizes.paddingDefault,
    paddingBottom: AppStyle.sizes.paddingDefault
  },
  ButtonView: {
    justifyContent: "center",
    paddingBottom: AppStyle.sizes.paddingDefault,
    flexDirection: "row"
  },
  TabIndicatorView: {
    flexDirection: "row",
    justifyContent: "center",
    height: AppStyle.sizes.paddingDefault,
    margin: AppStyle.sizes.paddingDefault
  },
  TabIndicatorNotActive: {
    backgroundColor: AppStyle.colors.primaryColor,
    borderRadius: 5,
    width: 10,
    margin: 5
  },
  TabIndicatorActive: {
    backgroundColor: AppStyle.colors.primaryColor,
    borderRadius: 5,
    width: 50,
    margin: 5
  }
};

export default OnBoardingStyles;
