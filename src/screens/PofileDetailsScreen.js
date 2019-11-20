import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import HeadedText from '../components/HeadedText'
import AppStyles from '../commons/AppStyles'
import { UserContext } from '../contexts/UserContext'
const {width} = Dimensions.get('screen')

class ProfileDetailsScreen extends React.Component{
    static contextType = UserContext
    constructor(props){
        super(props)
    }

    static navigationOptions = (props)=>{
        const isCurrentUser = props.navigation.getParam("isCurrentUser", true);
        console.log(isCurrentUser);
        return {
        title: isCurrentUser? "Profile": "About",
        headerRight: isCurrentUser? <HeaderRightComponent navigation={props.navigation}/> : "no"
    }}

    render(){
        const {profile} = this.context

        return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.imageContainer}>
                        <Image  style={styles.profileImage} source={profile.avatar} />
                    </View>
                    <HeadedText heading="Name" body={profile.name}/>
                    <HeadedText heading="Email" body={profile.email}/>
                    <HeadedText heading="Bio" body={profile.bio}/>
                    <HeadedText heading="LinkedIn URL" body={profile.linkedin? profile.linkedin: "Not provided"}/>
                    <HeadedText heading="Twitter URL" body={profile.twitter? profile.twitter: "Not provided"}/>
                    <HeadedText heading="Facebook URL URL" body={profile.facebook? profile.facebook: "Not provided"} style={{marginBottom: 60}}/>
                    
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
        height: width - 40,
        marginVertical: 30,
    },
    profileImage:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50

    }
    
})

export default ProfileDetailsScreen;
