import AppStyles from "../../config/AppStyles";

const TextsStyles = {
  h1: {
    fontFamily: AppStyles.fonts.secondaryFontBold,
    fontSize: AppStyles.sizes.h1,
    padding: AppStyles.sizes.paddingHalf,
    textAlign: "center",
    color: AppStyles.colors.dexwinBlack
  },
  h2: {
    fontFamily: AppStyles.fonts.secondaryFontBold,
    fontSize: AppStyles.sizes.h2,
    padding: AppStyles.sizes.paddingHalf,
    textAlign: "left",
    color: AppStyles.colors.dexwinBlack
  },
  logo: {
    fontFamily: AppStyles.fonts.secondaryFontBold,
    fontSize: AppStyles.sizes.h1,
    padding: AppStyles.sizes.paddingHalf,
    textAlign: "left",
    color: AppStyles.colors.primaryColor
  },
  paragraphText: {
    fontFamily: AppStyles.fonts.primaryFontLight,
    fontSize: AppStyles.sizes.defaultFont,
    color: AppStyles.colors.dexwinBlack
  },
  defaultButtonText: {
    fontFamily: AppStyles.fonts.secondaryFontBold,
    fontSize: AppStyles.sizes.defaultFont,
    color: AppStyles.colors.dexwinWhite
  }
};

export default TextsStyles;
