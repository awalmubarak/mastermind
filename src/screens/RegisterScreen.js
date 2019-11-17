import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import GoogleAction from '../components/googleAction'
import AppStyles from '../commons/AppStyles'

const RegisterScreen = ({navigation})=>{
    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />        
        <View style={styles.headerContainer}>
            <Text style={styles.greetingText}>Welcome</Text>
            <Text style={styles.actionText}>Sign Up</Text>
        </View>

        <ScrollView style={styles.cardContainer}>
            <View style={styles.formContainer}>
                <Input label="Full Name" placeholder="John Smith"/>
                <Input label="Email" placeholder="name@example.com"/>
                <Input label="Password" secure placeholder="********"/>
                <Button text="Sign Up" onPress={()=>navigation.navigate('CreateProfile')}/>
            </View>
            
            <GoogleAction actionText="Sign In" actionMessage="Already Have An Account?" action={()=>navigation.navigate("Login")}/>
        </ScrollView>
        
    </View>
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