import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({onPress, text, style, textStyle})=>{
    return <TouchableOpacity style={[styles.getStartedButton, style]} onPress={()=>onPress()}>
                <Text style={[styles.getStartedButtonText, textStyle]}> {text} </Text>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    getStartedButton:{
        marginTop: 5,
        height: 45,
        backgroundColor: '#067b7a',
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        elevation: 10
    },
    getStartedButtonText:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 2,
        width: "100%"
    },
})

export default Button;