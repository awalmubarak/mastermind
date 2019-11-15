import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ProfileDetailsScreen = (props)=>{
    return <View>
        <Text>Profile</Text>
    </View>
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

export default ProfileDetailsScreen;
