import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const SendMessage = ()=>{
    return <View style={styles.container}>
        <TextInput 
            style={styles.input} 
            placeholder="Say something..."
            multiline
            clearButtonMode="always"
            />
        <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="md-send" size={32} color="#067b7a"/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    input:{
        fontSize: 18,
        borderWidth:1,
        borderColor: "#c9c9c9",
        borderRadius: 3,
        padding: 3,
        paddingStart: 10,
        paddingEnd: 10,
        flex: 0.8,
    },
    sendButton:{
        flex: 0.2,
        alignItems: "center"
    }
})

export default SendMessage;