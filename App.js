import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import React from 'react';
import {Text} from 'react-native'
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SignUpSuccessScreen from './src/screens/SignUpSuccessScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import CreateProfileSuccessScreen from './src/screens/CreateProfileSuccessScreen';
import GroupsScreen from './src/screens/GroupsScreen';
import CreateGroupScreen from './src/screens/CreateGroupScreen';
import DrawerSidebar from './src/components/drawerSidebar';



const defaultConfigs = {
  defaultNavigationOptions: {
    title: "Mastermind",
    headerStyle:{
      backgroundColor: "#067b7a"
    },
    headerTitleStyle:{
      color:"white",
    },
    headerTintColor: "white"
  },
  headerLayoutPreset: 'center'
}

const CreateProfileNavigator = createStackNavigator({
  SignUpSuccess:{
    screen:SignUpSuccessScreen,
    navigationOptions:{
      header: null
    }
  },
  CreateProfile: {
    screen: CreateProfileScreen,
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

const AppNavigator = createStackNavigator({
  Group: {
    screen: GroupsScreen,
    navigationOptions: {
      title: "Mastermind Groups"
    }
  }
}, {
  ...defaultConfigs,
  navigationOptions: {
    headerLeft: <Text>Drawer</Text>
  },
});

const DrawerNavigator = createDrawerNavigator({
  Groups: AppNavigator,
  CreateGroup: CreateGroupScreen
}, {
  contentComponent: props=><DrawerSidebar {...props}/>
})

const Navigator = createSwitchNavigator({
  App: DrawerNavigator,
  Home: WelcomeScreen,
  Register: RegisterScreen,
  Login: LoginScreen,
  CreateProfile: CreateProfileNavigator,
  ProfileSuccess: CreateProfileSuccessScreen,
})

export default createAppContainer(Navigator)
