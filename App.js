import React from 'react'; 
import AppNavigator from './src/navigation/AppNavigator'
import DropdownAlert from 'react-native-dropdownalert';
import { DropDownHolder } from './src/commons/DropDownHolder';
import NavigationService from './src/navigation/NavigationService';
import { UserProvider } from './src/contexts/UserContext';


export default function App(){
  
  return <UserProvider>
      <AppNavigator ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
      <DropdownAlert ref={(ref)=>DropDownHolder.setDropDown(ref)}/>
    </UserProvider>
}

