import { DropDownHolder } from '../commons/DropDownHolder';
import firestore from '@react-native-firebase/firestore';

export const createNewGroup = async(groupInfo,user, profile, callback, onError)=>{
    try {
        const results = await firestore()
            .collection('groups')
            .add(groupInfo)
        await addUserToGroup(user,profile,{...groupInfo, id: results.id},null,onError)
        callback()
    } catch (error) {
        onError(error)   
    }
}

export const addUserToGroup= async (user,profile,group,callback,onError)=>{
     try {
        let batch =  firestore().batch()
        let userGroupsRef = firestore().collection('user_groups').doc(user.uid).collection('groups').doc(group.id)
        let groupMembersRef = firestore().collection('group_members').doc(group.id).collection('members').doc(user.uid)
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
                id: documentSnapshot.id, // required for FlatList
            };
            });
    } catch (error) {
        groups = []
        DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);   
    }finally{
        return groups
    }
}


export const getGroupByUID = async(uid, onSuccess, onError)=>{
    try {
        const snapshot  = await firestore()
                .collection('groups')
                .where('uid','==',uid)
                .get()
            
        if (snapshot.empty) {
            onSuccess(null)
        }else{
            snapshot.forEach(doc=>{
                onSuccess({id:doc.id, ...doc.data()})
            })
        }
    } catch (error) {
        onError(error)
    }
}

export const getUserGroupById = async(userId, groupId, onSuccess, onError)=>{
    try {
        const snapshot  = await firestore()
                        .collection('user_groups')
                        .doc(userId)
                        .collection("groups")
                        .doc(groupId)
                        .get()
            
            
        if (snapshot.exists) {
            onSuccess({id:snapshot.id, ...snapshot.data()})
        }else{
            onSuccess(null)
        }
    } catch (error) {
        onError(error)
    }
}


export const getGroupById = async(groupId, onSuccess, onError)=>{
    try {
        const snapshot  = await firestore()
                        .collection('groups')
                        .doc(groupId)
                        .get()
        if (snapshot.exists) {
            onSuccess({id:snapshot.id, ...snapshot.data()})
        }else{
            onSuccess(null)
        }
    } catch (error) {
        onError(error)
    }
}


export const getGroupMembers = async(groupId, onSuccess, onError)=>{
    try {
        const results = await firestore()
            .collection('groups_members')
            .doc(groupId)
            .collection("members")
            .get()
        const members = results.docs.map((documentSnapshot) => {
            return {
                ...documentSnapshot.data(),
                id: documentSnapshot.id, // required for FlatList
            };
            });
        onSuccess(members)
    } catch (error) {
        onError(error) 
    }
}




