import React from 'react'
import { Text, StyleSheet, View, StatusBar, Image } from 'react-native'
import Button from '../components/button'
import Card from '../components/card'
import AppStyles from '../commons/AppStyles'

const CreateProfileSuccessScreen = ({navigation})=>{
    return <View style={styles.container}>
            <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
            <Card style={styles.cardContainer}>
                <View>
                    <Image source={require('../assets/success.png')} style={styles.image}/>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>Your profile has been created successfully.</Text>
                    <Button text="Continue" 
                        style={styles.button}
                        onPress={()=>navigation.navigate("App")}
                     />
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
    }
})

export default CreateProfileSuccessScreen;
