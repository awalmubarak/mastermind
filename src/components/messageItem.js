import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const renderIncomingMessage = ()=>{
    return <View style={styles.container}>
        <View style={styles.messageContainer}>
        <Text style={styles.senderName}>Marine Hanaman</Text>
        <View style={styles.messageBodyContainer}>
            <Text style={styles.messageBodyText} >React Native is an open-source mobile application framework created by Facebook. It is used to d</Text>
        </View>
        </View> 
    </View>
}

const renderOutGoingMessage = ()=>{
    return <View style={[styles.container, {justifyContent: "flex-end"}]}>
        <View style={styles.outGoingMessageContainer}>
            <Text style={styles.messageBodyText} > Web and UWP by enabling developers to use</Text>
        </View>
    </View>
}

const MessageItem = ({item})=>{
    if(item%2==0){
        return renderIncomingMessage()
    }
    return renderOutGoingMessage()
}

styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 10,
        marginHorizontal: 10
    }, 

    messageContainer:{
        flex: 0.7,
        alignItems: "center",
        
    },
    outGoingMessageContainer:{
        flex: 0.7,
        padding: 10,
        borderWidth: 1,
        borderColor: "#067b7a",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    
    messageBodyText:{
        fontSize: 16,
        lineHeight: 20
    },
    messageBodyContainer:{
        padding: 10,
        borderWidth: 1,
        borderColor: "#bdbdbd",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    senderName:{
        width: "100%",
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
        color:"#067b7a"
    }
    
    
})

export default React.memo(MessageItem);