import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';


const AuthNavigator = createStackNavigator({
  Home: {
    screen:WelcomeScreen,
    navigationOptions: {
      header:null
    }
  }
}, {
  defaultNavigationOptions:{
    title: "MasterMind"
  },
  headerLayoutPreset: "center"
});

export default createAppContainer(AuthNavigator)
