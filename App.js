import React from 'react'; 
import AppNavigator from './src/navigation/AppNavigator'
import DropdownAlert from 'react-native-dropdownalert';
import { DropDownHolder } from './src/commons/DropDownHolder';


export default function App(){
  return <>
    <AppNavigator/>
    <DropdownAlert ref={(ref)=>DropDownHolder.setDropDown(ref)}/>
  </>
}

