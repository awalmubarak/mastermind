import React from 'react'
import { Text, StyleSheet, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import Button from '../components/button'
import Card from '../components/card'
import AppStyles from '../commons/AppStyles'


const SignUpSuccessScreen = ({navigation})=>{
    return <View style={styles.container}>
            <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
            <Card style={styles.cardContainer}>
                <View>
                    <Image source={require('../assets/signup-success.png')} style={styles.image}/>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>Welcome %user email% </Text>
                    <Text style={styles.message}> We just need a few information
                    to finish setting you up.</Text>
                    <Button text="Continue" 
                        style={styles.button}
                        onPress={()=>navigation.navigate("CreateProfile")}
                     />
                     <TouchableOpacity style={styles.skipButton} onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.skipText}>Use a different account</Text>
                </TouchableOpacity>
                </View>
            </Card>     
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppStyles.colors.primary,
        justifyContent: "center"
    },
    cardContainer:{
        alignItems: "center",        
        flex: 0.6,
        marginHorizontal: 10,
    },
    image:{
        width: 200,
        height: 200
    },
    messageContainer:{
        marginHorizontal: 10,
    },
    message:{
        fontSize: 20,
        textAlign: "center",
        color: "#616161",
        marginBottom: 10
    },
    button:{
        marginTop: 20,
    },
    skipText:{
        borderBottomColor: AppStyles.colors.primary,
        borderBottomWidth: 1,
        color: "#8c8c8c"
    },
    skipButton:{
        alignSelf: "center",
        marginTop: 10
    }
})

export default SignUpSuccessScreen;
