import React from 'react'
import { View, StyleSheet } from 'react-native'
import Input from "../components/input"
import ProfileContainer from '../components/profileContainer'
import {Formik} from 'formik'
import { stepTwo } from '../validationSchemas/ProfileSchema'

    const ProfileStepTwo = ({nextStep, context, prevAction})=>{
        const {profile, setProfile} = context

        return <Formik
            initialValues={{linkedin: profile.linkedin, twitter:profile.twitter, facebook: profile.facebook}}
            onSubmit={values =>{                
                setProfile({...profile, ...values});
                nextStep()
            } }
            validationSchema={stepTwo}>

        {({values, handleChange, handleSubmit, errors, handleBlur, touched})=>(
        
        <ProfileContainer 
            title="Social Proof" 
            step={2} nextAction={handleSubmit} prevAction={prevAction}>
            <View style={styles.formContainer}>
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
               
                
            </View>
        </ProfileContainer>

    )}
    </Formik>
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

    export default ProfileStepTwo;