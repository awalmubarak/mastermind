import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ScreenContainer from '../components/screenContainer'
import Input from '../components/input'
import Button from '../components/button'
import AppStyles from '../commons/AppStyles'
import Loader from '../components/loader'
import { DropDownHolder } from '../commons/DropDownHolder';
import {useNetInfo} from "@react-native-community/netinfo";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { sendPasswordResetEmail, getAuthErrorMessage } from '../firebase/FirebaseAuth'

const ResetPasswordScreen = ({navigation})=>{
    const netInfo = useNetInfo();
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [emailSent, setEmailSent] = useState(false)



    const renderStepOne = ()=>{
        return <View style={styles.container}>
            <Text style={styles.description}>Enter Your Email Address to Continue</Text>
            <Input label="Email Address" value={email} onchange={setEmail}/>
           <Button text="Reset Password" onPress={()=>{
               if (netInfo.type==="none" || netInfo.type==="unknown"|| !netInfo.isInternetReachable) {
                DropDownHolder.dropDown.alertWithType('error', 'Error', "No Internet Connection");
                return;
            }
            setIsLoading(true)
               sendPasswordResetEmail(email, ()=>{
                setIsLoading(false)
                setEmailSent(true)
               }, (err)=>{
                setIsLoading(false)
                const message = getAuthErrorMessage(err.code) || err.message
                DropDownHolder.dropDown.alertWithType('error', 'Error', message);
               })
           }}/>
            
        </View>
    }
    const renderStepTwo = ()=>{
        return <View style={styles.emailSentContainer}>
            <Text style={styles.emaiSentText}>An Email with a password reset link has been sent to the email address <Text style={{fontWeight: "bold"}}>{email}</Text>. {'\n'}Click on that link to reset your password.</Text>           
        </View>
    }

    return <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ScreenContainer 
            title="Reset Password">
            {emailSent? renderStepTwo():renderStepOne()}
        </ScreenContainer>
        <Loader message="Sending reset email..." visible={isLoading}/>
    </KeyboardAwareScrollView>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 30
    },
    description:{
        fontSize: 15
    },
    headedTextContainer:{
        marginVertical: 10
    },
    heading:{
        fontSize: 18,
        fontFamily:"Brown-Bold",
        marginBottom: 2
    },
    body:{
        fontSize: AppStyles.sizes.defaultTextSize
    },
    groupTitle:{
        fontSize: 21,
        marginBottom: 10
    },
    emailSentContainer:{
        marginHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    emaiSentText:{
        fontSize: 20,
        lineHeight: 30,
    }
    
})

export default ResetPasswordScreen;

