import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({onPress, text})=>{
    return <TouchableOpacity style={styles.getStartedButton} onPress={()=>onPress()}>
                <Text style={styles.getStartedButtonText}> {text} </Text>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
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
})

export default Button;