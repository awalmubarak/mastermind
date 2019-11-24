import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SendMessage = ({status,onSend})=>{
    const [message, setMessage] = useState("")
    const meetingStarted = ()=>{
        return <View style={styles.container}>
        <TextInput 
            style={styles.input} 
            placeholder="Say something..."
            multiline
            clearButtonMode="always"
            onChangeText={setMessage}
            value={message}
            />
        <TouchableOpacity style={styles.sendButton} onPress={()=>{
            onSend(message)
            setMessage("")
        }}>
            <Ionicons name="md-send" size={32} color="#067b7a"/>
        </TouchableOpacity>
    </View> 
    }

    const meetingNotStarted = (message)=>{
        return <View style={styles.container}>
            <Text style={styles.meetingPendingText}>{message}</Text>
        </View> 
    }
    
    if(status==="pending"){
        return meetingNotStarted("You can't send messages here because the facilitator hasn't started this meeting.")
    }else if(status==="started"){
        return meetingStarted()
    }
    return meetingNotStarted("You can't send messages here because the facilitator has ended this meeting.")
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    input:{
        fontSize: 18,
        borderWidth:1,
        borderColor: "#c9c9c9",
        borderRadius: 3,
        padding: 3,
        paddingStart: 10,
        paddingEnd: 10,
        flex: 0.8,
    },
    sendButton:{
        flex: 0.2,
        alignItems: "center"
    },
    meetingPendingText:{
        textAlign: "center",
        padding: 4
    }
})

export default SendMessage;