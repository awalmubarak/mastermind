import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import GoogleAction from '../components/googleAction'

const LoginScreen = ({navigation})=>{
    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />
        <View style={styles.headerContainer}>
            <Text style={styles.greetingText}>Welcome Back,</Text>
            <Text style={styles.actionText}>Sign In</Text>
        </View>

        <View style={styles.cardContainer}>
            <View style={styles.formContainer}>
                <Input label="Email" placeholder="name@example.com"/>
                <Input label="Password" secure placeholder="********"/>
                <Button text="Sign In"/>
            </View>
            
            <GoogleAction actionText="Sign Up" actionMessage="Don't Have An Account?" action={()=>navigation.navigate("Register")}/>
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

})

export default LoginScreen;