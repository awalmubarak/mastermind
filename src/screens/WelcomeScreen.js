import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import Button from '../components/button'
const WelcomeScreen = ({navigation})=>{
    return <View style={styles.container}>
        <View>
            <Image source={require('../assets/welcome.png')} style={styles.image}/>
        </View>
        <View>
            <Text style={styles.welcomeMessage}>Create, Facilitate, Join mastermind groups </Text>
            <Button text="Get Started" onPress={()=>navigation.navigate('Auth')}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: "center",
        marginHorizontal: 50
    },
    image:{
        width: 300,
        height: 300,
        borderRadius: 50
    },
    
    welcomeMessage:{
        marginVertical: 20,
        textAlign: "center",
        fontSize: 15
    }

})

export default WelcomeScreen;