import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { DropDownHolder } from '../commons/DropDownHolder';
import ProfileStepOne from '../components/createProfileOne'
import ProfileStepTwo from '../components/createProfileTwo'
import ProfileStepThree from '../components/createProfileThree'
import Loader from '../components/loader'
import { createUserProfile} from '../firebase/FirebaseAuth'
import { withUserHOC } from '../contexts/UserContext'
import {useNetInfo} from "@react-native-community/netinfo";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const CreateProfieScreen = ({navigation, context})=>{
    const netInfo = useNetInfo();
    const [isLoading, setIsLoading] = useState(false)
    const {user,profile} = context
    const [step, setStep] = useState(1)
    const previousStep = ()=>{
        setStep(step - 1)
    }
    const nextStep = ()=>{
        if(step==3){
            if (netInfo.type==="none" || netInfo.type==="unknown"|| !netInfo.isInternetReachable) {
                DropDownHolder.dropDown.alertWithType('error', 'Error', "No Internet Connection");
                return;
            }
            setIsLoading(true)
            createUserProfile(user,profile, ()=>{
                setIsLoading(false)
                navigation.navigate('ProfileSuccess')
            })
        }else{
            setStep(step + 1)
        }
    }


    if(step==1){
        return <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <ProfileStepOne nextStep={nextStep} context={context}/></KeyboardAwareScrollView>
    }else if(step==2){
        return <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ProfileStepTwo nextStep={nextStep} prevAction={previousStep} context={context}/>
        </KeyboardAwareScrollView>
    }else if(step==3){
        return <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ProfileStepThree nextStep={nextStep} prevAction={previousStep} context={context}/>
        <Loader visible={isLoading} message='Creating Profile...'/>
        </KeyboardAwareScrollView>
    }
}


const styles = StyleSheet.create({
    
    formContainer:{
        marginHorizontal: 20
    },
    input:{
        height: 150,
        marginTop: 8
    },
    chooseImage:{
        height: 50,
        width: 50
    },
    imageContainer: {
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 0.5
    },
    profileImage:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    

})

export default withUserHOC(CreateProfieScreen);