import React,{useState, useEffect} from 'react'
import { View, StyleSheet, ActivityIndicator,StatusBar, Image, ScrollView, Dimensions } from 'react-native'
import HeadedText from '../components/HeadedText'
import { DropDownHolder } from '../commons/DropDownHolder';
import { getUserById } from '../firebase/FirebaseAuth'
const {width} = Dimensions.get('screen')


const MemberDetailsScreen =({navigation})=>{
    const [loading, setLoading] = useState(true)   
    const [profile, setProfile] = useState({})
    const user = navigation.getParam('user', null);

    useEffect(() => {
        const getUser = async()=>{
            await getUserById(user.id, (profile)=>{
                setProfile(profile)
                setLoading(false)
            }, (error)=>{
                DropDownHolder.dropDown.alertWithType('error', 'Error', error.message); 
            })
        }
        getUser()
        return () => {
            
        };
    }, [])

    if(loading){
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <StatusBar backgroundColor="#067b7a" barStyle="light-content" /> 
                <ActivityIndicator />
            </View>
        );
    }

    return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image  style={styles.profileImage} source={profile.avatar} />
                </View>
                <HeadedText heading="Name" body={profile.name}/>
                <HeadedText heading="Bio" body={profile.bio}/>
                <HeadedText heading="LinkedIn URL" body={profile.linkedin? profile.linkedin: "Not provided"} selectable/>
                <HeadedText heading="Twitter URL" body={profile.twitter? profile.twitter: "Not provided"} selectable/>
                <HeadedText heading="Facebook URL URL" body={profile.facebook? profile.facebook: "Not provided"} style={{marginBottom: 60}} selectable/>
                
            </ScrollView>
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

export default MemberDetailsScreen;
