import { GoogleSignin } from '@react-native-community/google-signin';
import { firebase } from '@react-native-firebase/auth';
import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';
import NavigationService from '../navigation/NavigationService';


const handleGoogleLogin = async()=>{

    try {
        const { accessToken, idToken } = await GoogleSignin.signIn();
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        await firebase.auth().signInWithCredential(credential);
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

const signOut= async()=>{
    try {
        const currentUser = await GoogleSignin.getCurrentUser();
        if(currentUser){
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            NavigationService.navigate("Home")
            DropDownHolder.dropDown.alertWithType('success', 'Success', "Sign Out Successful");
        }
        auth().signOut()
    } catch (error) {
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);

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


const handleEmailAuth = async (values, action, setIsLoading, message)=>{  
    setIsLoading(true)
    try {
        if(action==="sign in"){
            await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        }else{
            await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        }
        navigateAfterAuth()
        DropDownHolder.dropDown.alertWithType('success', 'Success', message);

    } catch (error) {
        console.log(error.code);
        const message = getAuthErrorMessage(error.code) || error.message
        DropDownHolder.dropDown.alertWithType('error', 'Error', message, {}, 7000);
    }
    setIsLoading(false)
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

export {handleGoogleLogin, getAuthErrorMessage, handleEmailAuth, navigateAfterAuth, signOut, getCurrentUser}