import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import MessageItem from '../components/messageItem'
import SendMessage from '../components/sendMesage'
import { Header } from 'react-native-elements';
import AppStyles from '../commons/AppStyles';

const ChatScreen = ({navigation})=>{
    const [chatStatus, setChatStatus] = useState({status: "pending", buttonText: "Start"})
    return <View style={styles.container}>
        <Header
            barStyle="light-content"
            centerComponent={(<TouchableOpacity style={{
                    fontSize: 15, 
                    borderColor: "white", 
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: 4
                }} onPress={()=>{
                    chatStatus.status==="pending"?
                        setChatStatus({status: "started", buttonText: "End"}): 
                        setChatStatus({status: "pending", buttonText: "Start"})
                }}>
                    <Text style={{color: "white"}}>{chatStatus.buttonText} Meeting</Text>
                </TouchableOpacity>)}
                containerStyle={{
                    backgroundColor: '#067b7a'
                }}
        />
        <View style={styles.header}>
            <Text style={styles.headerText} numberOfLines={1}>Second Meeting of Month 5</Text>
        </View>
        <View style={styles.mainContainer}>
        <FlatList 
            data={[1,2,3,4,5,6,7,8,9,11,10,12,13,14,15,16,17,18]}
            renderItem={({item})=> (<MessageItem item={item}/>)}
            keyExtractor={item => item.toString()}
            ListFooterComponent={<View style={{marginBottom: 300}}/>}
            showsVerticalScrollIndicator={false}
        />  
        </View>
        <View style={styles.footer}>
            <SendMessage status={chatStatus.status}/>
        </View>
    </View>
}

ChatScreen.navigationOptions = ()=>({
    header:null
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
        backgroundColor: AppStyles.colors.primary,
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