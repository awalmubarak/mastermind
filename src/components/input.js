import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const Input = ({label, placeholder, secure, value, onchange})=>{
    return <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput style={styles.textInput}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={secure?secure:false}
                    value={value}
                    onChangeText={onchange}
                />
            </View>
}

const styles = StyleSheet.create({
    textInput:{
        fontSize: 15,
        borderBottomColor: "#bdbdbd",
        borderBottomWidth: 1,
        paddingBottom: 0,
        paddingTop: 2,
        fontWeight: "bold"
    },
    inputContainer:{
        marginVertical: 20
    },
    inputLabel:{
        fontWeight: "bold",
        fontSize: 18
    }
})

export default Input;