import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import MessageItem from '../components/messageItem'
import SendMessage from '../components/sendMesage'

const ChatScreen = ({navigation})=>{
    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText} numberOfLines={1}>Second Meeting of Month 5</Text>
        </View>
        <View style={styles.mainContainer}>
        <FlatList 
            data={[1,2,3,4,5,6,7,8,9,11,10,12,13,14,15,16,17,18]}
            renderItem={({item})=> (<MessageItem item={item}/>)}
            keyExtractor={item => item.toString()}
            ListFooterComponent={<View style={{marginBottom: 200}}/>}
            showsVerticalScrollIndicator={false}
        />  
        </View>
        <View style={styles.footer}>
            <SendMessage/>
        </View>
    </View>
}

ChatScreen.navigationOptions = ()=>({
    title: "",
    headerRight: (<TouchableOpacity style={{
        marginRight: 10,
        fontSize: 15, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4
    }}>
        <Text style={{color: "white"}}>Start Meeting</Text>
    </TouchableOpacity>)
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f1f1f1"
    },
    header:{
        height: 60,
        borderRadius: 0,
        justifyContent: "center",
        elevation: 0.5,
        backgroundColor: "#067b7a",
        elevation: 3,
        alignItems: "center"
    },
    headerText:{
        marginHorizontal: 10,
        color: "white",
        textAlign: "center",
        fontSize: 17
    },
    footer: {
        height: 55,
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        backgroundColor: "white",
        elevation: 4,
        paddingTop: 5,
        paddingBottom: 5
    }
})

export default ChatScreen;