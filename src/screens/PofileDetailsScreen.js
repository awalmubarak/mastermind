import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import HeadedText from '../components/HeadedText'
import AppStyles from '../commons/AppStyles'

class ProfileDetailsScreen extends React.Component{
    constructor(props){
        super(props)
    }

    static navigationOptions = (props)=>{
        const isCurrentUser = props.navigation.getParam("isCurrentUser", true);
        console.log(isCurrentUser);
        return {
        title: isCurrentUser? "Profile": "About",
        headerRight: isCurrentUser? <HeaderRightComponent navigation={props.navigation}/> : ""
    }}

    render(){
        return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.imageContainer}>
                        <Image  style={styles.profileImage} source={require('../assets/profile.png')}/>
                    </View>
                    <HeadedText heading="Name" body="James Outsider"/>
                    <HeadedText heading="Bio" body="I am trying to make a button appear in headerRight of the header bar in a React Navigation screen, but I cant seem to get it to work."/>
                    <HeadedText heading="LinkedIn URL" body="https://linkedin.com/react-navigation/"/>
                    <HeadedText heading="Twitter URL" body="https://twitter.com/react-navigation/"/>
                    <HeadedText heading="Facebook URL URL" body="https://facebook.com/react-navigation/" style={{marginBottom: 60}}/>
                    
                </ScrollView>
    }
}

const HeaderRightComponent = ({navigation})=>{
    return (<TouchableOpacity style={{
        marginRight: 10,
        fontSize: AppStyles.sizes.defaultTextSize, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4,
        borderRadius: 4,
        paddingHorizontal: 10
    }} onPress={()=>navigation.navigate("EditProfile")}>
        <Text style={{color: "white"}}>Edit</Text>
    </TouchableOpacity>)
}

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
        borderColor: AppStyles.colors.primary,
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
