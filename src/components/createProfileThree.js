import React from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import ProfileContainer from '../components/profileContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker';
import { DropDownHolder } from '../commons/DropDownHolder';



const ProfileStepThree = ({nextStep, context, prevAction})=>{
    const {profile, setProfile} = context

    const selectImage = ()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            mediaType: 'photo',
            compressImageQuality: 0.7,
            includeBase64: true
          }).then(image => {
            setProfile({...profile, avatar: {uri: `data:${image.mime};base64,${image.data}`}})
          }).catch((error)=>{
              if(error.code==="E_PERMISSION_MISSING"){
                DropDownHolder.dropDown.alertWithType('error', 'Error', " Grant this app permission to select photos from your device");
              }
          })
    }

    return <ProfileContainer 
        title="Add A Profile Picture" 
        step={3} nextAction={nextStep} prevAction={prevAction}>
        <View style={styles.imageContainer}>
            <ImageBackground  style={styles.profileImage} source={profile.avatar}>
            <TouchableOpacity style={styles.chooseImageButton} onPress={selectImage}>
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

export default ProfileStepThree;