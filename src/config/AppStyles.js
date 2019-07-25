const AppStyles = {
  colors: {
    primaryColor: "#8A2BE2",
    dexwinWhite: "#fff",
    dexwinBlack: "#000",
    dexwinGrey: "#D3D3D3",
    dexwinSmokeWhite: "#F5F5F5",
    error: "#ff0000"
  },
  fonts: {
    primaryFont: "catamaran-regular",
    primaryFontLight: "catamaran-light",
    primaryFontBold: "catamaran-medium",
    primaryFontBold: "catamaran-bold",
    secondaryFont: "adventpro-regular",
    secondaryFontLight: "adventpro-light",
    secondaryFontBold: "adventpro-medium",
    secondaryFontBold: "adventpro-bold"
  },
  sizes: {
    paddingDefault: 20,
    paddingHalf: 10,
    defaultFont: 16,
    h1: 30,
    h2: 20,
    buttonRadius: 2,
    marginDefault: 10,
    marginDouble: 20
  }
};

const AppContainerStyle = {
  SafeAreaStyle: { backgroundColor: AppStyles.colors.primaryColor, flex: 1 },
  MainView: { backgroundColor: AppStyles.colors.dexwinWhite, flex: 1 }
};

export { AppContainerStyle };

export default AppStyles;
