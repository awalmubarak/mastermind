import React from 'react'; 
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignUpSuccessScreen from '../screens/SignUpSuccessScreen';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import CreateProfileSuccessScreen from '../screens/CreateProfileSuccessScreen';
import GroupsScreen from '../screens/GroupsScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import DrawerSidebar from '../components/drawerSidebar';
import JoinGroupScreen from '../screens/JoinGroupScreen';
import MeetingsScreen from '../screens/MeetingsScreen';
import TabBarButton from '../components/tabBarButton';
import ChatScreen from '../screens/ChatScreen';
import MeetingsHistoryScreen from '../screens/MeetingHistoryScreen';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';
import ProfileDetailsScreen from '../screens/PofileDetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';



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
  Home: WelcomeScreen,
  Register: RegisterScreen,
  Login: LoginScreen,
  CreateProfile: CreateProfileNavigator,
  ProfileSuccess: CreateProfileSuccessScreen,
  App: DrawerNavigator,  
})

export default createAppContainer(Navigator)
