import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import AppStyles from '../commons/AppStyles'

const Input = ({notification,label, placeholder, error, secure, value, onchange, numberOfLines, multiline, style, touched, ...rest})=>{
    return <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>{label}</Text>
                {notification && <Text style={styles.errorMessage}>{notification}</Text>}
                <TextInput style={[styles.textInput, style]}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={secure?secure:false}
                    value={value}
                    onChangeText={onchange}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    {...rest}
                />
                {touched && (error && <Text style={styles.errorMessage}>{error}</Text>)}
            </View>
}

const styles = StyleSheet.create({
    textInput:{
        fontSize: AppStyles.sizes.defaultTextSize,
        borderBottomColor: "#bdbdbd",
        borderBottomWidth: 1,
        paddingBottom: 0,
        paddingTop: 2,
        textAlignVertical: "top"
    },
    inputContainer:{
        marginVertical: 20
    },
    inputLabel:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#424242"
    },
    errorMessage:{
        color: "red"
    }
})

export default Input;