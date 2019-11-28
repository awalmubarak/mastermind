import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';
export const createNewMeeting = async(meetingInfo,groupId, callback)=>{
    try {
        const results = await firestore()
            .collection('group_meetings')
            .doc(groupId)
            .collection("meetings")
            .add(meetingInfo)
        // console.log(results);
        callback()
    } catch (error) {
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);   
    }
}

export const getAllGroupMeetings = async(group)=>{
    let userMeetings;
    try {
        const results = await firestore()
            .collection('group_meetings')
            .doc(group.id)
            .collection("meetings")
            .orderBy('status', 'desc')
            .get()
        userMeetings = results.docs.map((documentSnapshot) => {
            return {
                ...documentSnapshot.data(),
                id: documentSnapshot.id, // required for FlatList
            };
            });
    } catch (error) {
        userMeetings = []
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message, {});   
    }finally{
        return userMeetings
    }
}