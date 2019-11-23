import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';
import NavigationService from '../navigation/NavigationService';

export const createNewMeeting = async(meetingInfo, callback)=>{
    try {
        const results = await firestore()
            .collection('meetings')
            .add(meetingInfo)
        // console.log(results);
        callback()
    } catch (error) {
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);   
    }
}

export const GetAllMeetings = async()=>{
    let results;
    try {
        results = await firestore()
            .collection('meetings')
            .orderBy('createdAt', 'desc')
            .get()
    } catch (error) {
        results = []
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message, {});   
    }finally{
        return results.docs
    }
}