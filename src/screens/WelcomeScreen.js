import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
const WelcomeScreen = ()=>{
    return <View style={styles.container}>
        <View>
            <Image source={require('../assets/welcome.png')} style={styles.image}/>
        </View>
        <View>
            <Text style={styles.welcomeMessage}>Create, Facilitate, Join mastermind groups </Text>
            <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedButtonText}> Get Started </Text>
            </TouchableOpacity>
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
        height: 300
    },
    getStartedButton:{
        marginTop: 5,
        height: 45,
        backgroundColor: '#067b7a',
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    getStartedButtonText:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 2,
        width: "100%"
    },
    welcomeMessage:{
        marginVertical: 20,
        textAlign: "center",
        fontSize: 15
    }

})

export default WelcomeScreen;