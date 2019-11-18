import React, {useEffect} from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Button from '../components/button'
import AppStyles from '../commons/AppStyles'
import { GoogleSignin } from '@react-native-community/google-signin';

const WelcomeScreen = ({navigation})=>{
    const configureGoogleSignIn = async()=>{
        await GoogleSignin.configure({
            webClientId: '74421600413-t9r8ngkfrvpsk10vmj2t7ascce9k9htf.apps.googleusercontent.com', 
          });
    }
    useEffect(() => {
        configureGoogleSignIn()
        return () => {
        };
    }, [])
    return <View style={styles.container}>
        <View>
            <Image source={require('../assets/welcome.png')} style={styles.image}/>
        </View>
        <View>
            <Text style={styles.welcomeMessage}>Create, Facilitate, Join mastermind groups </Text>
            <Button text="Get Started" onPress={()=>navigation.navigate('Register')}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: "space-evenly",
        marginHorizontal: 50
    },
    image:{
        width: 300,
        height: 150,
    },
    
    welcomeMessage:{
        marginVertical: 20,
        textAlign: "center",
        fontSize: AppStyles.sizes.defaultTextSize
    }

})

export default WelcomeScreen;