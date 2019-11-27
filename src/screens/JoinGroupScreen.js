import React, {useState,useContext,useEffect} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import ScreenContainer from '../components/screenContainer'
import Input from '../components/input'
import Button from '../components/button'
import AppStyles from '../commons/AppStyles'
import Loader from '../components/loader'
import { getGroupByUID, addUserToGroup, getUserGroupById } from '../firebase/GroupsApi'
import { DropDownHolder } from '../commons/DropDownHolder';
import { UserContext } from '../contexts/UserContext'
import {useNetInfo} from "@react-native-community/netinfo";

const JoinGroupScreen = ({navigation})=>{
    const netInfo = useNetInfo();
    const {user,profile} = useContext(UserContext)
    const [groupId, setGroupId] = useState("")
    const [group, setGroup] = useState(null)
    const [buttonLoader, setButtonLoader] = useState(true)
    const [isMember, setIsMember] = useState(false)
    const [loader, setLoader] = useState({message:"", visible:false})



    const renderStepOne = ()=>{
        return <View style={styles.container}>
            <Text style={styles.description}>Enter Mastermind Group ID to continue</Text>
            <Input label="Group ID" value={groupId} onchange={setGroupId}/>
           <Button text="Continue" onPress={()=>{
               if (netInfo.type==="none" || netInfo.type==="unknown"|| !netInfo.isInternetReachable) {
                DropDownHolder.dropDown.alertWithType('error', 'Error', "No Internet Connection");
                return;
            }
               setLoader({message:"Getting group info..", visible:true})
               getGroupByUID(groupId, (group)=>{
                if (!group) {
                    DropDownHolder.dropDown.alertWithType('error', 'Error', "Group with ID '" + groupId + "' does not exist.");
                }else{
                    setGroup(group)
                    getUserGroupById(user.uid, group.id, (group)=>{
                        console.log(group);
                        
                        if(group){
                            setIsMember(true)
                        }
                        setButtonLoader(false)
                    }, (error)=>{

                    })
                }
                setLoader({message:"", visible:false})
                
               }, (err)=>{

               })
           }}/>
            
        </View>
    }
    const renderStepTwo = (group)=>{
        return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>About</Text>
                <Text style={styles.body}>{group.description}</Text>
            </View> 

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Niche</Text>
                <Text style={styles.body}>{group.niche}</Text>
            </View> 

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Experince Level</Text>
                <Text style={styles.body}>{group.experience}</Text>
            </View>

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Members</Text>
                <Text style={styles.body}>{group.memberCount}</Text>
            </View>

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Creator</Text>
                <Text style={styles.body}>{group.creator.name}</Text>
            </View> 
            {buttonLoader? <ActivityIndicator/>: showJoinButton()}
            <TouchableOpacity style={styles.skipButton} onPress={cleanUp}>
                <Text style={styles.skipText}>Cancel</Text>
            </TouchableOpacity> 
     
            
        </ScrollView>
    }

    const showJoinButton = ()=>{
        if(isMember){
            return <Text style={styles.existingMember}>You are already a member of this group</Text>
        }
        return <Button text="Join Now" 
        style={{marginVertical: 20}}
        onPress={()=>{
            if (netInfo.type==="none" || netInfo.type==="unknown"|| !netInfo.isInternetReachable) {
                DropDownHolder.dropDown.alertWithType('error', 'Error', "No Internet Connection");
                return;
            }
            setLoader({message:"Adding you to group...", visible:true})
            addUserToGroup(user,profile,group, ()=>{
                setLoader({message:"", visible:false})
                navigation.navigate("Group")
                DropDownHolder.dropDown.alertWithType('success', 'Success', "Added to Group Successfully");
            }, (error)=>{
                setLoader({message:"", visible:false})
                DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);
            })
        }} />   
    }

    const cleanUp = ()=>{
        setLoader({message:"", visible:false})
        setGroupId("")
        setGroup(null)
        setIsMember(false)
        setButtonLoader(true)
    }

    return <>
        <ScreenContainer 
            title="Join Group">
            {group? renderStepTwo(group): renderStepOne()}
        </ScreenContainer>
        <Loader message={loader.message} visible={loader.visible}/>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 30
    },
    description:{
        fontSize: 15
    },
    headedTextContainer:{
        marginVertical: 10
    },
    heading:{
        fontSize: 18,
        fontFamily:"Brown-Bold",
        marginBottom: 2
    },
    body:{
        fontSize: AppStyles.sizes.defaultTextSize
    },
    groupTitle:{
        fontSize: 21,
        marginBottom: 10
    },
    skipText:{
        borderBottomColor: AppStyles.colors.primary,
        borderBottomWidth: 1,
        color: "#8c8c8c"
    },
    skipButton:{
        alignSelf: "center",
        marginVertical: 20
    },
    existingMember: {
        fontSize: 18, 
        marginTop: 10, 
        padding: 5, 
        color: "#ff9900"
    }
})

export default JoinGroupScreen;

