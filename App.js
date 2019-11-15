import React from 'react'; 
import { TouchableOpacity, Text } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SignUpSuccessScreen from './src/screens/SignUpSuccessScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import CreateProfileSuccessScreen from './src/screens/CreateProfileSuccessScreen';
import GroupsScreen from './src/screens/GroupsScreen';
import CreateGroupScreen from './src/screens/CreateGroupScreen';
import DrawerSidebar from './src/components/drawerSidebar';
import JoinGroupScreen from './src/screens/JoinGroupScreen';
import MeetingsScreen from './src/screens/MeetingsScreen';
import TabBarButton from './src/components/tabBarButton';
import ChatScreen from './src/screens/ChatScreen';
import MeetingsHistoryScreen from './src/screens/MeetingHistoryScreen';
import GroupDetailsScreen from './src/screens/GroupDetailsScreen';
import ProfileDetailsScreen from './src/screens/PofileDetailsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';



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

const TabBarComponent = props => <BottomTabBar {...props} />;
const ButtomTabNavigator = createBottomTabNavigator({
  UpcomingMeetings: MeetingsScreen,
  MeetingsHistory: MeetingsHistoryScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarButtonComponent: (props)=>(
      <TabBarButton routeName={navigation.state.routeName} {...props}/>
    ),
  }),
  tabBarComponent: props => (
    <TabBarComponent {...props} style={{ borderTopColor: 'white' }} />
  ),
})

const AppNavigator = createStackNavigator({
  Group: GroupsScreen,
  MeetingsTab: {
    screen: ButtomTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  GroupDetails: {
    screen: GroupDetailsScreen,
    navigationOptions: {
      title: "Group Info"
    }
  }, 
  Chat: ChatScreen,
  ProfileDetails: ProfileDetailsScreen,
  EditProfile: EditProfileScreen
}, defaultConfigs);

const DrawerNavigator = createDrawerNavigator({
  Groups: AppNavigator,
  CreateGroup: CreateGroupScreen,
  JoinGroup: JoinGroupScreen
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
