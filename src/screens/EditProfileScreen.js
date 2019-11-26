import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import Input from '../components/input'
import Button from '../components/button'
import AppStyles from '../commons/AppStyles'
import { withUserHOC } from '../contexts/UserContext'
import { UpdateProfileSchema } from '../validationSchemas/ProfileSchema'
import Loader from '../components/loader'
import { createUserProfile, batchUpdateUserInfo } from '../firebase/FirebaseAuth'
import { DropDownHolder } from '../commons/DropDownHolder'
import ImagePicker from 'react-native-image-crop-picker';
import { Formik } from 'formik'
import {useNetInfo} from "@react-native-community/netinfo";



const EditProfileScreen = ({navigation,context})=>{
    const netInfo = useNetInfo();
    const {profile, setProfile, user} = context
    const [profileInfo, setProfileInfo] = useState(profile)
    const [isLoading, setIsLoading] = useState(false)
    const [imageChanged, setImageChanged] = useState(false)
    const selectImage = ()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            mediaType: 'photo',
            compressImageQuality: 0.7,
            includeBase64: true
          }).then(image => {
            setProfileInfo({...profileInfo, avatar: {uri: `data:${image.mime};base64,${image.data}`}})
            setImageChanged(true)
          }).catch((error)=>{
              if(error.code==="E_PERMISSION_MISSING"){
                DropDownHolder.dropDown.alertWithType('error', 'Error', " Grant this app permission to select photos from your device");
              }
          })
    }

    return <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
                <View style={styles.imageContainer}>
                    <ImageBackground  style={styles.profileImage} source={profileInfo.avatar}>
                        <TouchableOpacity style={styles.chooseImageButton} onPress={selectImage}>
                            <Image source={require('../assets/profile.png')} style={styles.chooseImage}/>                    
                        </TouchableOpacity>
                    </ImageBackground>
            
                </View>
                <Formik
                    initialValues={{name:profile.name, bio:profile.bio, linkedin:profile.linkedin, facebook:profile.facebook, twitter:profile.twitter}}
                    onSubmit={values => {
                        if (netInfo.type==="none" || netInfo.type==="unknown"|| !netInfo.isInternetReachable) {
                            DropDownHolder.dropDown.alertWithType('error', 'Error', "No Internet Connection");
                            return;
                        }
                        setIsLoading(true)
                        const newProfile = {...profileInfo, ...values}
                        if(imageChanged){
                                batchUpdateUserInfo(user,newProfile, ()=>{
                                setProfile(newProfile)
                                navigation.goBack()
                                DropDownHolder.dropDown.alertWithType('success', 'Success', "Profile Updated Successfully");
                            }, (error)=>DropDownHolder.dropDown.alertWithType('error', 'Error',error.message))
                        }else{                            
                            createUserProfile(user,newProfile, ()=>{
                                setProfile(newProfile)
                                navigation.goBack()
                                DropDownHolder.dropDown.alertWithType('success', 'Success', "Profile Updated Successfully");
                            })
                        }
                        
                    }}
                    validationSchema={UpdateProfileSchema}
                >
                {({values, handleChange, handleSubmit, errors, handleBlur, touched})=>(
                <>
                {/* <Input 
                    label="Your Name"
                    placeholder="John Smith"
                    value={values.name} 
                    error={errors.name}
                    onBlur={handleBlur('name')}
                    touched={touched.name}
                    onchange={handleChange("name")}
                     /> */}
                <Input label="Bio"  
                    placeholder="short info about yourself"
                    numberOfLines={10}
                    multiline={true}
                    style={styles.input}
                    value={values.bio} 
                    error={errors.bio}
                    onBlur={handleBlur('bio')}
                    touched={touched.bio}
                    onchange={handleChange("bio")}
                    />

                <Input 
                    label="LinkedIn URL" 
                    placeholder="https://linkedin.com/in/username"
                    value={values.linkedin} 
                    error={errors.linkedin}
                    onBlur={handleBlur('linkedin')}
                    touched={touched.linkedin}
                    onchange={handleChange("linkedin")}
                    />
                <Input 
                    label="Twitter URL" 
                    placeholder="https://twitter.com/username"
                    value={values.twitter} 
                    error={errors.twitter}
                    onBlur={handleBlur('twitter')}
                    touched={touched.twitter}
                    onchange={handleChange("twitter")}
                    />
                <Input 
                    label="Facebook URL" 
                    placeholder="https://facebook.com/username"
                    value={values.facebook} 
                    error={errors.facebook}
                    onBlur={handleBlur('facebook')}
                    touched={touched.facebook}
                    onchange={handleChange("facebook")}
                    />   
                
                <Button text="Update Profile" style={styles.buttonStyle} onPress={handleSubmit}/>
                </>
                )}
                </Formik>
            </View>
            <Loader message="Updating Profile..." visible={isLoading}/>
    </ScrollView>
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
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        borderWidth: 1,
        borderColor: AppStyles.colors.primary,
        marginTop: 30,
    },
    profileImage:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle:{
        marginBottom: 30
    }
    
})

export default withUserHOC(EditProfileScreen);
