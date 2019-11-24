import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';
import NavigationService from '../navigation/NavigationService';

export const createNewGroup = async(groupInfo, callback)=>{
    try {
        const results = await firestore()
            .collection('groups')
            .add(groupInfo)
        // console.log(results);
        callback()
    } catch (error) {
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message, {});   
    }
}

export const GetAllGroups = async()=>{
    let groups;
    try {
        const results = await firestore()
            .collection('groups')
            .orderBy('createdAt', 'desc')
            .get()
         groups = results.docs.map((documentSnapshot) => {
            return {
                ...documentSnapshot.data(),
                key: documentSnapshot.id, // required for FlatList
            };
            });
    } catch (error) {
        groups = []
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message, {});   
    }finally{
        return groups
    }
}
