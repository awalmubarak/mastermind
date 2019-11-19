import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TextInput } from 'react-native'
import Input from "../components/input"
import ProfileContainer from '../components/profileContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Formik} from 'formik'
import { withUserHOC } from '../contexts/UserContext'

    const ProfileStepThree = ({nextStep, context, prevAction})=>{
        const {profile, setProfile} = context

    return <ProfileContainer 
        title="Add A Profile Picture" 
        step={3} nextAction={nextStep} prevAction={prevAction}>
        <View style={styles.imageContainer}>
            <ImageBackground  style={styles.profileImage}>
            <TouchableOpacity style={styles.chooseImageButton}>
                <Image source={require('../assets/profile.png')} style={styles.chooseImage}/>                    
            </TouchableOpacity>
            </ImageBackground>
        </View>
    </ProfileContainer>
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

    export default withUserHOC(ProfileStepThree)