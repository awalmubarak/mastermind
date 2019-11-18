import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import GoogleAction from '../components/googleAction'
import AppStyles from '../commons/AppStyles'
import { Formik } from 'formik'
import UserSchema from '../validationSchemas/UserSchema'
import Loader from '../components/loader'
import {handleGoogleLogin, handleEmailAuth} from '../firebase/FirebaseAuth'


const RegisterScreen = ({navigation})=>{
    const [isLoading, setIsLoading] = useState(false)

    return <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />        
        <View style={styles.headerContainer}>
            <Text style={styles.greetingText}>Welcome Back</Text>
            <Text style={styles.actionText}>Sign In</Text>
        </View>

        <ScrollView style={styles.cardContainer}>
            <View style={styles.formContainer}>
                <Formik
                    initialValues={{email: "", password:""}}
                    onSubmit={values => handleEmailAuth(values, "sign in", setIsLoading, 'Sign in successful')}
                    validationSchema={UserSchema}
                >
                {({values, handleChange, handleSubmit, errors, handleBlur, touched})=>(
                    <>
                        <Input 
                            label="Email" 
                            placeholder="name@example.com" 
                            value={values.email} 
                            error={errors.email}
                            onBlur={handleBlur('email')}
                            touched={touched.email}
                            onchange={handleChange("email")}/>

                        <Input 
                            label="Password" 
                            secure 
                            placeholder="********" 
                            value={values.password} 
                            error={errors.password}
                            touched={touched.password}
                            onBlur={handleBlur('password')}
                            onchange={handleChange("password")}/>
                        <Button text="Sign In" onPress={handleSubmit}/>
                    </>
                )}
                </Formik>
            </View>
            
            <GoogleAction actionText="Sign Up" actionMessage="Don't have an account?" googleAction={handleGoogleLogin} linkAction={()=>navigation.navigate("Register")}/>
        </ScrollView>
        <Loader visible={isLoading} message="Signing In..."/>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyles.colors.primary,
        flex: 1
    },
    headerContainer:{
        marginHorizontal: 20,
        flex: 0.2,
        justifyContent: "center"
    },
    greetingText:{
        color: "white",
        opacity: 0.5
    },
    actionText:{
        color: "white",
        fontSize: 30
    },
    cardContainer:{
        backgroundColor: "white",
        elevation: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 0.8,
        paddingTop: 20
    },
    formContainer:{
        marginHorizontal: 20
    },

})

export default RegisterScreen;