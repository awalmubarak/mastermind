import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator,StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthLoadingScreen =({navigation}) =>{
    
  const [user, setUser] = useState();
 
  // Handle user state changes
  const onAuthStateChanged=(newUuser)=> {
    setUser(newUuser);
    navigation.navigate(user? "App": "Home")
  }
 
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
 
  
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <StatusBar backgroundColor="#067b7a" barStyle="light-content" /> 
            <ActivityIndicator />
        </View>
    );
    
 
}

export default AuthLoadingScreen;