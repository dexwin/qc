import AppStyle from "../../config/AppStyle";

const OnBoardingScreen = {
  MainView: { backgroundColor: AppStyle.colors.dexwinWhite, flex: 1 },
  TopSectionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  ContainerView: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  ButtonView: {
    justifyContent: "center",
    paddingBottom: 20,
    flexDirection: "row"
  }
};

export default OnBoardingScreen;
