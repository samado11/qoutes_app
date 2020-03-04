/**
 * @format
 */

import { Navigation } from "react-native-navigation";

import App from "./App";
import Language from "./src/screens/language";
import categoryAr from "./src/screens/categoryAr";
import categoryEn from "./src/screens/categoryEn";
import nocategory from "./src/screens/noCategory";
import arabic from "./src/screens/arabic";
import english from "./src/screens/english";

Navigation.registerComponent(`WelcomeScreen`, () => App);
Navigation.registerComponent(`Language`, () => Language);
Navigation.registerComponent(`categoryAr`, () => categoryAr);
Navigation.registerComponent(`categoryEn`, () => categoryEn);
Navigation.registerComponent(`nocategory`, () => nocategory);
Navigation.registerComponent(`arabic`, () => arabic);
Navigation.registerComponent(`english`, () => english);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      backgroundColor: "#132226",
      // style: 'dark'
    },
    topBar: {
      drawBehind: true,
      visible: false,
      animate: false,
    },
    layout: {
      backgroundColor: 'white',
      orientation: ['portrait'],
    },
    animations: {
      push: {
        waitForRender: true,
      },
      showModal: {
        waitForRender: true,
      },
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        id:'AppStack',
        children:[
          {
            component:{
              name: "Language"
            }
          }
        ]
       
      }
    }
  });
});
