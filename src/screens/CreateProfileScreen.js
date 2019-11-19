import React, {useState} from 'react'
import {  View, StyleSheet, Image, ImageBackground } from 'react-native'
import ProfileContainer from '../components/profileContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProfileStepOne from '../components/createProfileOne'
import ProfileStepTwo from '../components/createProfileTwo'
import ProfileStepThree from '../components/createProfileThree'
import Loader from '../components/loader'
import { createUserProfile} from '../firebase/FirebaseAuth'
import { withUserHOC } from '../contexts/UserContext'

const CreateProfieScreen = ({navigation, context})=>{
    const [isLoading, setIsLoading] = useState(false)
    const {profile} = context
    const [step, setStep] = useState(1)
    const previousStep = ()=>{
        setStep(step - 1)
    }
    const nextStep = ()=>{
        if(step==3){
            setIsLoading(true)
            createUserProfile(profile, ()=>{
                setIsLoading(false)
                navigation.navigate('ProfileSuccess')
            })
        }else{
            setStep(step + 1)
        }
    }

    const renderStepThree = ()=>{
        return <ProfileContainer 
            title="Add A Profile Picture" 
            step={step} nextAction={nextStep} prevAction={previousStep}>
            <View style={styles.imageContainer}>
                <ImageBackground  style={styles.profileImage}>
                <TouchableOpacity style={styles.chooseImageButton}>
                    <Image source={require('../assets/profile.png')} style={styles.chooseImage}/>                    
                </TouchableOpacity>
                </ImageBackground>
            </View>
        </ProfileContainer>
    }

    if(step==1){
        return <ProfileStepOne nextStep={nextStep} context={context}/>
    }else if(step==2){
        return <ProfileStepTwo nextStep={nextStep} prevAction={previousStep} context={context}/>
    }else if(step==3){
        return <>
        <ProfileStepThree nextStep={nextStep} prevAction={previousStep} context={context}/>
        <Loader visible={isLoading} message='Creating Profile...'/>
        </>
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