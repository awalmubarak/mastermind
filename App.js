import React from 'react'; 
import AppNavigator from './src/navigation/AppNavigator'
import DropdownAlert from 'react-native-dropdownalert';
import { DropDownHolder } from './src/commons/DropDownHolder';
import NavigationService from './src/navigation/NavigationService';


export default function App(){
  return <>
    <AppNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
    <DropdownAlert ref={(ref)=>DropDownHolder.setDropDown(ref)}/>
  </>
}

