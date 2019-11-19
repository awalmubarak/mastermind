import { GoogleSignin } from '@react-native-community/google-signin';
import { firebase } from '@react-native-firebase/auth';
import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';
import NavigationService from '../navigation/NavigationService';


const handleGoogleLogin = async(setUser)=>{

    try {
        const { accessToken, idToken } = await GoogleSignin.signIn();
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        const results = await firebase.auth().signInWithCredential(credential);
        setUser(results.user)
        navigateAfterAuth()
        DropDownHolder.dropDown.alertWithType('success', 'Success', 'Sign In Successful');

    } catch (error) {
        console.log(error);
    }
}

const getCurrentUser = async()=>{
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
} 

const signOut= async(setIsLoading)=>{
    try {
        const currentUser = await GoogleSignin.getCurrentUser();
        if(currentUser){
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        }
        firebase.auth().signOut()
        NavigationService.navigate("Home")
        DropDownHolder.dropDown.alertWithType('success', 'Success', "Sign Out Successful");

    } catch (error) {
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);
        if(setIsLoading){
            setIsLoading(false)
        }
    }
  }

const navigateAfterAuth = async()=>{
    try {
        const user = firebase.auth().currentUser;
        const results = await firestore()
            .collection('users')
            .doc(user.uid)
            .get()
        if(results.data()){
            NavigationService.navigate("App")
        }else{
            NavigationService.navigate("CreateProfile")
        }
        
    } catch (error) {
        console.log(error);   
    }
}

const createUserProfile = async(profile, callback)=>{
    try {
        const user = firebase.auth().currentUser;
        const results = await firestore()
            .collection('users')
            .doc(user.uid)
            .set(profile)
        console.log(results);
        callback()
        
    } catch (error) {
        const message = getAuthErrorMessage(error.code) || error.message
        DropDownHolder.dropDown.alertWithType('error', 'Error', message, {});   
    }
}


const handleEmailAuth = async (values, action, setIsLoading, message, setUser)=>{  
    setIsLoading(true)
    try {
        let results;
        if(action==="sign in"){
             results = await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        }else{
             results = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        }
        console.log("Email", results.user);
        
        navigateAfterAuth()
        DropDownHolder.dropDown.alertWithType('success', 'Success', message);

    } catch (error) {
        console.log(error.code);
        const message = getAuthErrorMessage(error.code) || error.message
        DropDownHolder.dropDown.alertWithType('error', 'Error', message, {}, 7000);
    }finally{
        setIsLoading(false)
    }
    // alert(JSON.stringify(values))    
}

const errors = {
    "auth/user-not-found": "User with the provided email was not found.",
    "auth/email-already-in-use": "The email address is already in use by another user",
    "auth/weak-password": "The password you entered is very weak. Use a stronger password.",
    "auth/wrong-password": "The password you entered is incorrect."
}
const getAuthErrorMessage = (key)=>{
    if(errors[key])return errors[key];
    return null;
}

export {handleGoogleLogin, getAuthErrorMessage, handleEmailAuth, navigateAfterAuth, signOut, getCurrentUser, createUserProfile}