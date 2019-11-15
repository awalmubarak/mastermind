import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import Input from '../components/input'
import Button from '../components/button'

const EditProfileScreen = (props)=>{
    return <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
                <View style={styles.imageContainer}>
                    <ImageBackground  style={styles.profileImage}>
                        <TouchableOpacity style={styles.chooseImageButton}>
                            <Image source={require('../assets/profile.png')} style={styles.chooseImage}/>                    
                        </TouchableOpacity>
                    </ImageBackground>
            
                </View>
                <Input label="Your Name" placeholder="John Smith"/>
                <Input label="Bio"  
                    placeholder="short info about yourself"
                    numberOfLines={10}
                    multiline={true}
                    style={styles.input}
                    />

                <Input label="LinkedIn URL" placeholder="https://linkedin.com/in/username"/>
                <Input label="Twitter URL" placeholder="https://twitter.com/username"/>
                <Input label="Facebook URL" placeholder="https://facebook.com/username"/>   
                
                <Button text="updateProfile" style={styles.buttonStyle}/>
            </View>
    </ScrollView>
}

EditProfileScreen.navigationOptions = ()=>({
    title: "Edit Profile"
})

const styles = StyleSheet.create({
    container:{

    },
    formContainer:{
        marginHorizontal: 20
    },
    input:{
        height: 150,
        marginTop: 8
    },
    chooseImage:{
        height: 50,
        width: 50
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        borderWidth: 1,
        borderColor: "#067b7a",
        marginTop: 30,
    },
    profileImage:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle:{
        marginBottom: 30
    }
    
})

export default EditProfileScreen;
