import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';



const defaultConfig = {
  defaultNavigationOptions:{
    title: "MasterMind"
  },
  headerLayoutPreset: "center"
}

const AuthNavigator = createStackNavigator({
  Register: {
    screen :RegisterScreen,
    navigationOptions: {
      header:null
    }
  },
  Login: LoginScreen
},defaultConfig);

const Navigator = createSwitchNavigator({
  Home: {
    screen:WelcomeScreen,
    navigationOptions: {
      header:null
    }
  },
  Register: {
    screen :RegisterScreen,
    navigationOptions: {
      header:null
    }
  },
  Login: LoginScreen
})

export default createAppContainer(Navigator)
