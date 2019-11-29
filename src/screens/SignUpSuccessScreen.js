import React, {useState} from 'react'
import { Text, StyleSheet, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import Button from '../components/button'
import Card from '../components/card'
import AppStyles from '../commons/AppStyles'
import { withUserHOC } from '../contexts/UserContext'
import { signOut } from '../firebase/FirebaseAuth'
import Loader from '../components/loader'
import { DEFAULT_AVATAR } from '../commons/Utils'


const SignUpSuccessScreen = ({navigation, context})=>{
    const {user, setProfile,setUser} = context
    const [isLoading, setIsLoading] = useState(false)
    return <View style={styles.container}>
            <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
            <Card style={styles.cardContainer}>
                <View>
                    <Image source={require('../assets/signup-success.png')} style={styles.image}/>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>Welcome! </Text>
                    <Text style={[styles.message, {fontSize: 20, fontFamily:"Brown-Bold"}]}>{user.email} </Text>
                    <Text style={styles.message}> We just need a few information
                    to finish setting you up.</Text>
                    <Button text="Continue" 
                        style={styles.button}
                        onPress={()=>navigation.navigate("CreateProfile")}
                     />
                     <TouchableOpacity style={styles.skipButton} onPress={()=>{
                         setIsLoading(true)
                         signOut(()=>{
                            setProfile({name:"", bio:"", linkedin:"", twitter:"", facebook:"", avatar:{ uri: DEFAULT_AVATAR }})
                            setUser({})
                         }, ()=>setIsLoading(false))
                         }}>
                    <Text style={styles.skipText}>Use a different account</Text>
                </TouchableOpacity>
                </View>
            </Card>  
            <Loader message="Signing Out..." visible={isLoading}/>   
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppStyles.colors.primary,
        justifyContent: "center"
    },
    cardContainer:{
        alignItems: "center",        
        flex: 0.8,
        marginHorizontal: 10,
        justifyContent: "center"
    },
    image:{
        width: 200,
        height: 200
    },
    messageContainer:{
        marginHorizontal: 10,
    },
    message:{
        fontSize: 18,
        textAlign: "center",
        color: "#616161",
        marginBottom: 5
    },
    button:{
        marginTop: 20,
    },
    skipText:{
        borderBottomColor: AppStyles.colors.primary,
        borderBottomWidth: 1,
        color: "#8c8c8c"
    },
    skipButton:{
        alignSelf: "center",
        marginTop: 10
    }
})

export default withUserHOC(SignUpSuccessScreen);
