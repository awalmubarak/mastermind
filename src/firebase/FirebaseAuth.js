import { GoogleSignin } from '@react-native-community/google-signin';
import { firebase } from '@react-native-firebase/auth';
import { DropDownHolder } from '../commons/DropDownHolder'

const handleGoogleLogin = async()=>{

    try {
        const { accessToken, idToken } = await GoogleSignin.signIn();
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        await firebase.auth().signInWithCredential(credential);
        DropDownHolder.dropDown.alertWithType('success', 'Success', 'Sign In Successful');

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

export {handleGoogleLogin, errors, getAuthErrorMessage, handleEmailAuth}