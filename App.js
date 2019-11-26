import React,{useEffect} from 'react'; 
import AppNavigator from './src/navigation/AppNavigator'
import DropdownAlert from 'react-native-dropdownalert';
import { DropDownHolder } from './src/commons/DropDownHolder';
import NavigationService from './src/navigation/NavigationService';
import { UserProvider } from './src/contexts/UserContext';
import {setCustomTextInput,setCustomText} from 'react-native-global-props';
import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://5ab3a546db58434b965a85db553cf8d3@sentry.io/1834556', 
});

const customFontProps = { 
  style: { 
    fontFamily: "Brown_Pro_Regular"
  }
}



export default function App(){
  useEffect(() => {
    setCustomTextInput(customFontProps)
    setCustomText(customFontProps);
    return () => {
    };
  }, [])
  return <UserProvider>
      <AppNavigator ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
      <DropdownAlert ref={(ref)=>DropDownHolder.setDropDown(ref)}/>
    </UserProvider>
}

