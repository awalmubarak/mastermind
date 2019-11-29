import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator,StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { navigateAfterAuth, signOut } from '../firebase/FirebaseAuth'
import { UserContext } from '../contexts/UserContext';
import firestore from '@react-native-firebase/firestore';
import AppStyles from '../commons/AppStyles';


const configureFirebase = async()=>{
  await GoogleSignin.configure({
      webClientId: '74421600413-t9r8ngkfrvpsk10vmj2t7ascce9k9htf.apps.googleusercontent.com', 
    });
    await firestore().settings({
      cacheSizeBytes: firestore.CACHE_SIZE_UNLIMITED, // unlimited cache size
    });
}

const AuthLoadingScreen =({navigation}) =>{
  const {setUser, setProfile, profile} = useContext(UserContext)
 
  
  // Handle user state changes
  const onAuthStateChanged=(newUuser)=> {
    setUser(newUuser)
  }
 
  useEffect(() => {
    configureFirebase()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const currentUser = auth().currentUser;
    if(currentUser){
      navigateAfterAuth((user, userProfile)=>{
        setUser(user)
        setProfile({...profile, ...userProfile, email: user.email})
    })
    }else{
      navigation.navigate(currentUser? "App": "Home")
    }
    
    return subscriber; // unsubscribe on unmount
  }, []);
 
  
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <StatusBar backgroundColor={AppStyles.colors.primary} barStyle="light-content" /> 
            <ActivityIndicator size="large" color="white"/>
        </View>
    );
    
 
}

export default AuthLoadingScreen;