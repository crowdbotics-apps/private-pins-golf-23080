import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings180177Navigator from '../features/Settings180177/navigator';
import UserProfile180170Navigator from '../features/UserProfile180170/navigator';
import Settings180169Navigator from '../features/Settings180169/navigator';
import Settings180167Navigator from '../features/Settings180167/navigator';
import SignIn2180165Navigator from '../features/SignIn2180165/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings180177: { screen: Settings180177Navigator },
UserProfile180170: { screen: UserProfile180170Navigator },
Settings180169: { screen: Settings180169Navigator },
Settings180167: { screen: Settings180167Navigator },
SignIn2180165: { screen: SignIn2180165Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
