import { GoogleSignin } from '@react-native-community/google-signin';
import { firebase } from '@react-native-firebase/auth';
import { DropDownHolder } from '../commons/DropDownHolder'

const handleGoogleLogin = async()=>{

    try {
        const { accessToken, idToken } = await GoogleSignin.signIn();
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        await firebase.auth().signInWithCredential(credential);
        DropDownHolder.dropDown.alertWithType('success', 'Success', 'Your Account has been created successfully');

    } catch (error) {
        console.log(error);
    }
}

export {handleGoogleLogin}