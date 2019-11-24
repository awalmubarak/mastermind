import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';
import NavigationService from '../navigation/NavigationService';

export const createNewGroup = async(groupInfo,user, profile, callback, onError)=>{
    try {
        const results = await firestore()
            .collection('groups')
            .add(groupInfo)
        await addUserToGroup(user,profile,null,{...groupInfo, id: results.id},onError)
        callback()
    } catch (error) {
        onError(error)   
    }
}

export const addUserToGroup= async (user,profile,callback,group,onError)=>{
     try {
        let batch =  firestore().batch()
        let userGroupsRef = firestore().collection('user_groups').doc(user.uid).collection('groups').doc(group.id)
        let groupMembersRef = firestore().collection('groups_members').doc(group.id).collection('members').doc(user.uid)
        batch.set(userGroupsRef, {title: group.title, creator: group.creator, id: group.id, createdAt: group.createdAt})
        batch.set(groupMembersRef, {name: profile.name, id: user.uid, avatar: profile.avatar})
        await batch.commit()
        if (callback) {
            callback()
        }    
     } catch (error) {
         console.log(error);
        onError(error)
     }
}

export const getAllUserGroups = async(user)=>{
    let groups;
    try {
        const results = await firestore()
            .collection('user_groups')
            .doc(user.uid)
            .collection("groups")
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
