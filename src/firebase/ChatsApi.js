import firestore from '@react-native-firebase/firestore';
import moment from "moment"

export const sendMeetingMessage = async(message, sender, meetingId)=>{
    try {
        const results = await firestore()
            .collection('meeting_messages')
            .doc(meetingId)
            .collection("messages")
            .add({text:message, sender, createdAt: firestore.FieldValue.serverTimestamp()})
        
    } catch (error) {
        log(error)
    }
}