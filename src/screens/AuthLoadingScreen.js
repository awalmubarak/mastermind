import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator,StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { navigateAfterAuth, signOut } from '../firebase/FirebaseAuth'

const configureGoogleSignIn = async()=>{
  await GoogleSignin.configure({
      webClientId: '74421600413-t9r8ngkfrvpsk10vmj2t7ascce9k9htf.apps.googleusercontent.com', 
    });
}

const AuthLoadingScreen =({navigation}) =>{

  const [user, setUser] = useState();
 
  
  // Handle user state changes
  const onAuthStateChanged=(newUuser)=> {
    
    setUser(newUuser);
    console.log(user);
  }
 
  useEffect(() => {
    configureGoogleSignIn()
    //  signOut()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const currentUser = auth().currentUser;
    if(currentUser){
      navigateAfterAuth();
    }else{
      navigation.navigate(currentUser? "App": "Home")
    }
    
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