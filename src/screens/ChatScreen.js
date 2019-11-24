import React, {useState,useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity,Alert } from 'react-native'
import MessageItem from '../components/messageItem'
import SendMessage from '../components/sendMesage'
import { Header } from 'react-native-elements';
import AppStyles from '../commons/AppStyles';
import { withUserHOC } from '../contexts/UserContext';
import firestore from '@react-native-firebase/firestore';
import { DropDownHolder } from '../commons/DropDownHolder';
import Loader from '../components/loader';



const getHeaderButtonText=(status)=>{
    switch (status) {
        case "pending":
            return "Start"
        case "started":
            return "End"
        default:
            return null
    }
}

const ChatScreen = ({navigation, context})=>{
    const group = navigation.getParam('group', null);
    const meeting = navigation.getParam('meeting', null);
    const isHistory = navigation.getParam('isHistory', true);
    const {user} = context
    const [chatStatus, setChatStatus] = useState({status: meeting.status, buttonText: getHeaderButtonText(meeting.status)})
    const [loader, setLoader] = useState({loading:false, message: ""})

    const toggleMeetingButton = ()=>{
        if(chatStatus.status==="pending"){
            let alertMessage = 'Are you sure you want to START this meeting now?'
            let loaderMessage = "Starting meeting..."
            let newStatus = "started"
            toggleMeeting(alertMessage,loaderMessage,newStatus)
        }else{
            let alertMessage = 'Are you sure you want to END this meeting now?'
            let loaderMessage = "Ending meeting..."
            let newStatus = "ended"
            toggleMeeting(alertMessage,loaderMessage,newStatus)
        }
    }
    const updateMeeting = async(status, callback, onError)=>{
        try {
            await firestore()
            .collection('group_meetings')
            .doc(group.id)
            .collection("meetings")
            .doc(meeting.id)
            .update({status})
            callback()
        } catch (error) {
            onError(error)
        }
    }

    const toggleMeeting = (alertMessage, loaderMessage, newStatus)=>{
        Alert.alert(
            '',
            alertMessage,
            [
              {
                text: 'Cancel',
                onPress: ()=>console.log("Cancelled"),
                style: 'cancel',
              },
              {text: 'Yes', onPress: () => {
                setLoader({loading: true, message: loaderMessage})
                updateMeeting(newStatus, ()=>{
                    setLoader({loading: false, message: ""})

                }, (error)=>{
                    setLoader({loading: false, message: ""})
                    DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);   
                })
            }
         },
            ],
            {cancelable: true},
          );
    }
    
    if (!isHistory) {
        useEffect(() => {
            const unsubscribe = firestore()
                .collection('group_meetings')
                .doc(group.id)
                .collection("meetings")
                .doc(meeting.id)
              .onSnapshot((querySnapshot) => {
                const meeting = querySnapshot.data()
                setChatStatus({status: meeting.status, buttonText: getHeaderButtonText(meeting.status)})
                if(meeting.status==="started"){
                    DropDownHolder.dropDown.alertWithType('success', 'Success', 'Meeting Started');
                }else if(meeting.status==="ended"){
                    DropDownHolder.dropDown.alertWithType('success', 'Success', 'Meeting Ended');
                }
              });
         
              return () => unsubscribe(); // Stop listening for updates whenever the component unmounts
          }, []);   
    }
    
    return <View style={styles.container}>
        
        {((user.uid===group.creator.id) && (chatStatus.status!=="ended")) &&<Header
            barStyle="light-content"
            centerComponent={(<TouchableOpacity style={{
                    fontSize: 15, 
                    borderColor: "white", 
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: 4
                }} onPress={toggleMeetingButton}>
                    <Text style={{color: "white"}}>{chatStatus.buttonText} Meeting</Text>
                </TouchableOpacity>)}
                containerStyle={{
                    backgroundColor: '#067b7a'
                }}
        />}
        <View style={styles.header}>
        <Text style={styles.headerText} numberOfLines={1}>{meeting.title}</Text>
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
        <Loader message={loader.message} visible={loader.loading}/>
    </View>
}

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

export default withUserHOC(ChatScreen);