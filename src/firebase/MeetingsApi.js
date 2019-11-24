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
    let results;
    try {
        results = await firestore()
            .collection('group_meetings')
            .doc(group.id)
            .collection("meetings")
            .orderBy('createdAt', 'desc')
            .get()
    } catch (error) {
        results = []
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message, {});   
    }finally{
        return results.docs
    }
}