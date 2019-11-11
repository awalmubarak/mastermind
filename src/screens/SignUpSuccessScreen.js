import React from 'react'
import { Text, StyleSheet, View, StatusBar, Image } from 'react-native'
import Button from '../components/button'
import Card from '../components/card'

const SignUpSuccessScreen = ({navigation})=>{
    return <View style={styles.container}>
            <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
            <Card style={styles.cardContainer}>
                <View>
                    <Image source={require('../assets/signup-success.png')} style={styles.image}/>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>Your account has been 
                    created successfully.</Text>
                    <Text style={styles.message}> We just need a few information
                    to finish setting you up.</Text>
                    <Button text="Continue" 
                        style={styles.button}
                        onPress={()=>navigation.navigate("CreateProfile")}
                     />
                </View>
            </Card>     
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#067b7a",
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
    }
})

export default SignUpSuccessScreen;
