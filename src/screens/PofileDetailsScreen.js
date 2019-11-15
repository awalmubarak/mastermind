import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import HeadedText from '../components/HeadedText'

const ProfileDetailsScreen = (props)=>{
    return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image  style={styles.profileImage} source={require('../assets/profile.png')}/>
                </View>
                <HeadedText heading="Name" body="James Outsider"/>
                <HeadedText heading="Bio" body="tabbar using react-native,support android and ios,mobile bottom tab bar with more freedom.And what's more,solved the problem overflow parent hidden on the android,also it can be defined center item by itself. tabbar using react-native,support android and ios,mobile bottom tab bar with more freedom.And what's more,solved the problem overflow parent hidden on the android,also it can be defined center item by itself.

"/>
                <HeadedText heading="LinkedIn URL" body="https://linkedin.com/react-navigation/"/>
                <HeadedText heading="Twitter URL" body="https://twitter.com/react-navigation/"/>
                <HeadedText heading="Facebook URL URL" body="https://facebook.com/react-navigation/" style={{marginBottom: 60}}/>
                
            </ScrollView>
}

ProfileDetailsScreen.navigationOptions = ({navigation})=>({
    title: "Profile",
    headerRight: (<TouchableOpacity style={{
        marginRight: 10,
        fontSize: 15, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4,
        borderRadius: 4,
        paddingHorizontal: 10
    }} onPress={()=>navigation.navigate("EditProfile")}>
        <Text style={{color: "white"}}>Edit</Text>
    </TouchableOpacity>)
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 20
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        borderWidth: 1,
        borderColor: "#067b7a",
        marginVertical: 30,
    },
    profileImage:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
    
})

export default ProfileDetailsScreen;
