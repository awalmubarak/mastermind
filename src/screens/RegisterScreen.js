import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

const RegisterScreen = ()=>{
    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.greetingText}>Welcome</Text>
            <Text style={styles.actionText}>Sign Up</Text>
        </View>

        <View style={styles.cardContainer}>
            <View style={styles.formContainer}>
                <Input label="Full Name"/>
                <Input label="Email"/>
                <Input label="Password"/>
                <Button text="Sign Up"/>
            </View>
            <View style={styles.dividerContainer}>
                <View style={styles.divider}></View>
                <Text>OR</Text>
                <View style={styles.divider}></View>
            </View>

            <View style={styles.googleContainer}>
            <GoogleSigninButton
                style={styles.googleSignInButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={()=>{}}
                disabled={false} />
            </View>

        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#067b7a',
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
    dividerContainer:{
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    divider:{
        height: 1,
        width: 30,
        backgroundColor: "grey",
        alignSelf: "center",
        marginHorizontal: 5
    },
    googleContainer:{
        alignItems: "center",
        marginTop: 20
    },
    googleSignInButton:{ 
        width: 200
    }
    

})

export default RegisterScreen;