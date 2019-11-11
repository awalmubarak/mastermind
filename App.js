import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SignUpSuccessScreen from './src/screens/SignUpSuccessScreen';



const defaultConfig = {
  defaultNavigationOptions:{
    title: "MasterMind"
  },
  headerLayoutPreset: "center"
}

const CreateProfileNavigator = createStackNavigator({
  SignUpSuccess:{
    screen:SignUpSuccessScreen,
    navigationOptions:{
      header: null
    }
  }
},{
  defaultNavigationOptions:{
    title: "Create Profile"
  },
  headerLayoutPreset: "center"
});

const Navigator = createSwitchNavigator({
  Home: WelcomeScreen,
  Register: RegisterScreen,
  Login: LoginScreen,
  CreateProfile: CreateProfileNavigator
})

export default createAppContainer(Navigator)
