import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import ProfileContainer from '../components/profileContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'



const CreateProfieScreen = ({navigation})=>{
    const [step, setStep] = useState(1)

    const previousStep = ()=>{
        setStep(step - 1)
    }
    const nextStep = ()=>{
        if(step==3){
            navigation.navigate('ProfileSuccess')
        }else{
            setStep(step + 1)
        }
    }
    const renderStepOne = ()=>{
        return <ProfileContainer 
            title="About You" 
            step={step} 
            nextAction={nextStep}>
            <View style={styles.formContainer}>
                <Input label="Your Name" placeholder="John Smith"/>
                <Input label="Bio"  
                    placeholder="short info about yourself"
                    numberOfLines={10}
                    multiline={true}
                    style={styles.input}
                    />
                
            </View>
        </ProfileContainer>
    }
    
    const renderStepTwo = ()=>{
        return <ProfileContainer 
            title="Social Proof" 
            step={step} nextAction={nextStep} prevAction={previousStep}>
            <View style={styles.formContainer}>
                <Input label="LinkedIn URL" placeholder="https://linkedin.com/in/username"/>
                <Input label="Twitter URL" placeholder="https://twitter.com/username"/>
                <Input label="Facebook URL" placeholder="https://facebook.com/username"/>
               
                
            </View>
        </ProfileContainer>
    }

    const renderStepThree = ()=>{
        return <ProfileContainer 
            title="Choose A Profile Picture" 
            step={step} nextAction={nextStep} prevAction={previousStep}>
            <View style={styles.imageContainer}>
                <ImageBackground  style={styles.profileImage}>
                <TouchableOpacity style={styles.chooseImageButton}>
                    <Image source={require('../assets/plus.png')} style={styles.chooseImage}/>                    
                </TouchableOpacity>
                </ImageBackground>
   
            </View>
        </ProfileContainer>
    }

    if(step==1){
        return renderStepOne()
    }else if(step==2){
        return renderStepTwo()
    }else if(step==3){
        return renderStepThree()
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
        height: 100,
        width: 100
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
    }

})

export default CreateProfieScreen;