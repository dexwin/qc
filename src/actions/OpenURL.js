import { Linking } from "react-native";

//opens provided ${url} paramter in a broswer if supported 
const OpenURL = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + this.props.url);
    }
  });
};

export default OpenURL;
