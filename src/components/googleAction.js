import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import AppStyles from '../commons/AppStyles';

const GoogleAction = ({actionMessage, actionText, googleAction, linkAction, navigation})=>{
    return <>
    {actionText=="Sign Up" && <View style={styles.loginActionContainer}>
                <Text>Forgot your password?   </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')}>
                    <Text style={styles.signInText}>Reset Password</Text>
                </TouchableOpacity>
            </View>}
        <View style={styles.dividerContainer}>
                <View style={styles.divider}></View>
                <Text>OR</Text>
                <View style={styles.divider}></View>
            </View>

            <View style={styles.googleContainer}>
            <GoogleSigninButton
                style={styles.googleSignInButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={googleAction}
                disabled={false} />
            </View>

            <View style={styles.loginActionContainer}>
                <Text>{actionMessage}   </Text>
                <TouchableOpacity onPress={()=>linkAction()} style={{padding:5}}>
                    <Text style={styles.signInText}>{actionText}</Text>
                </TouchableOpacity>
            </View>
    </>
}

const styles = StyleSheet.create({
    dividerContainer:{
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    divider:{
        height: 1,
        width: 30,
        backgroundColor: "grey",
        alignSelf: "center",
        marginHorizontal: 5
    },
    googleContainer:{
        alignItems: "center",
        marginTop: 20
    },
    loginActionContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    signInText:{
        borderBottomColor: AppStyles.colors.primary,
        borderBottomWidth: 1
    },
})

export default GoogleAction;