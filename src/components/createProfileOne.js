import React from 'react'
import { View, StyleSheet } from 'react-native'
import Input from "../components/input"
import ProfileContainer from '../components/profileContainer'
import {Formik} from 'formik'
import { stepOne } from '../validationSchemas/ProfileSchema'
import { withUserHOC } from '../contexts/UserContext'

    const ProfileStepOne = ({nextStep, context})=>{
        const {profile, setProfile} = context

        return <Formik
                initialValues={{name: profile.name, bio:profile.bio}}
                onSubmit={values =>{
                    console.log(1,values);
                    setProfile({...profile, ...values});
                    nextStep()
                } }
                validationSchema={stepOne}
            >
        {({values, handleChange, handleSubmit, errors, handleBlur, touched})=>(
        
        <ProfileContainer 
            title="About You" 
            step={1} 
            nextAction={handleSubmit}>
            <View style={styles.formContainer}>
                
                    <Input 
                        label="Your Name" 
                        placeholder="John Smith"
                        value={values.name} 
                        error={errors.name}
                        onBlur={handleBlur('name')}
                        touched={touched.name}
                        onchange={handleChange("name")}
                        />
                    <Input label="Bio"  
                        placeholder="short info about yourself"
                        numberOfLines={10}
                        multiline={true}
                        value={values.bio} 
                        error={errors.bio}
                        onBlur={handleBlur('bio')}
                        touched={touched.bio}
                        onchange={handleChange("bio")}
                        style={styles.input}
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

    export default withUserHOC(ProfileStepOne)