import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator,StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

const AuthLoadingScreen =({navigation}) =>{

  const [user, setUser] = useState();
 
  const signOut= async()=>{
    try {
        const currentUser = await GoogleSignin.getCurrentUser();
        if(currentUser){
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        }
        auth().signOut()
    } catch (error) {
        console.log(error);
    }
  }
  // Handle user state changes
  const onAuthStateChanged=(newUuser)=> {
    
    setUser(newUuser);
    console.log(user);
  }
 
  useEffect(() => {
    // signOut()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const currentUser = auth().currentUser;
    navigation.navigate(currentUser? "App": "Home")
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