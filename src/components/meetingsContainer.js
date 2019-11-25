import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, RefreshControl,StatusBar,ActivityIndicator } from 'react-native'
import MeetingItem from './meetingItem'
import { Header } from 'react-native-elements';
import moment from "moment"
import CreateMeetingModal from './createMeetingModal';
import AppStyles from '../commons/AppStyles';
import Loader from '../components/loader'
import { createNewMeeting, getAllGroupMeetings } from '../firebase/MeetingsApi';
import { withUserHOC } from '../contexts/UserContext';
import firestore from '@react-native-firebase/firestore';
import NoItems from './NoItems';
import { getGroupById } from '../firebase/GroupsApi';
import { DropDownHolder } from '../commons/DropDownHolder';



const MeetingsContainer = ({navigation, isHistory, context})=>{
    const groupInfo = navigation.getParam("group", null);   
    const [modalVisible, setModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [loader, setLoader] = useState(true)
    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState(null)
    const [meetings, setMeetings] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [group, setGroup] = useState(groupInfo)
    const [dateTime, setDateTime] = useState({
        show: false,
        date: moment().format("D MMM YYYY"),
        time: moment().format("HH:mm"),
        mode: "date"
    })
    const {profile, user} = context
    

    const renderMeetingItem = ({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate("Chat", {meeting:item,group,isHistory})}>
            <MeetingItem meeting={item} isHistory={isHistory? true: false}/>
        </TouchableOpacity>
    )

    const setDate = (event, date) => {
        if(!date){
            setDateTime({
                ...dateTime, 
              show: Platform.OS === 'ios' ? true : false
             });
            return
        };
        setDateTime({
            ...dateTime, 
          show: Platform.OS === 'ios' ? true : false,
          time: dateTime.mode==="time"? moment(date).format("HH:mm"):dateTime.time,
          date: dateTime.mode==="date"? moment(date).format("D MMM YYYY"):dateTime.date,
        });
        
      }

    const showPicker = (mode)=>{
        setDateTime({...dateTime, mode, show: true})
    }

    const onRefresh = () =>{
        async function getUserMeetings(){
            setRefreshing(true)
            const userMeetings = await getAllGroupMeetings(group)
            setMeetings(userMeetings)
            setRefreshing(false)            
        }
        getUserMeetings()
    }

    useEffect(() => {
        const getGroupInfo = async()=>{
            await getGroupById(group.id, (group)=>{
                setGroup(group)
            }, (error)=>{
                DropDownHolder.dropDown.alertWithType('error', 'Error', error.message); 
            })
        }
        getGroupInfo()

        const unsubscribe = firestore()
            .collection('group_meetings')
            .doc(group.id)
            .collection("meetings")
          .orderBy('createdAt', 'desc')
          .onSnapshot((querySnapshot) => {
            const userMeetings = querySnapshot.docs.map((documentSnapshot) => {
              return {
                ...documentSnapshot.data(),
                id: documentSnapshot.id, // required for FlatList
              };
            });
     
            setMeetings(userMeetings)
     
            if (loader) {
                setLoader(false);
            }

          });
     
          return () => unsubscribe(); // Stop listening for updates whenever the component unmounts
      }, []);

        
        const filteredMeetings = meetings.filter((value)=>{
            if(isHistory){
                
                return value.status==="ended"
            }
            return (value.status==="pending"|| value.status==="started")
        })
        

    return <View style={styles.container}>
        {(user.uid===group.creator.id) && <Header
        barStyle="light-content"
        centerComponent={(<TouchableOpacity style={{
                fontSize: 15, 
                borderColor: "white", 
                borderWidth: 1,
                borderRadius: 4,
                padding: 4
            }} onPress={()=>setModalVisible(!modalVisible)}>
                <Text style={{color: "white"}}>Create Meeting</Text>
            </TouchableOpacity>)}
            containerStyle={{
                backgroundColor: AppStyles.colors.primary
            }}
            />}
        <View style={styles.cardContainer}>
            <CreateMeetingModal
                isVisible={modalVisible}
                date={dateTime.date}
                time={dateTime.time}
                createMeeting={()=>{
                    if(title.trim().length===0){
                        setTitleError(true)
                        return;
                    }else{
                        setTitleError(false)
                    }
                    setModalVisible(false)
                    setIsLoading(true)
                    createNewMeeting({title: title, date: dateTime.date, time: dateTime.time, createdAt: moment().unix(), creator: {name:profile.name, id:user.uid}, status:"pending"},group.id, ()=>{
                        setIsLoading(false)
                    })
                }}
                cancel={()=>setModalVisible(false)}
                mode={dateTime.mode}
                showPicker={showPicker}
                setDate={setDate}
                show={dateTime.show}
                setTitle={(text)=>{
                    if(text.trim().length===0){
                        setTitleError(true)
                    }
                    setTitleError(false)
                    setTitle(text)
                    
                }}
                titleError={titleError}
            />
            <View style={styles.groupContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate("GroupDetails", {group})}}>
                    <Text style={styles.groupTitle} numberOfLines={1}>{group.title}</Text>
                </TouchableOpacity>
            <View style={styles.groupDetailsContainer}>
                <Text style={styles.groupDetailsText}><Text>Facilitator: </Text>{group.creator.name}</Text>
                <View style={styles.groupNumberContainer}>
                    <Text style={styles.groupNumber}>{group.memberCount}</Text>
                    <Image source={require('../assets/group-white.png')} style={styles.groupIcon}/>
                </View>
            </View>
            </View>
        </View>
        {loader? <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <ActivityIndicator />
            </View>: 
             <FlatList 
             contentContainerStyle={filteredMeetings.length === 0 && styles.centerEmptySet}
             data={filteredMeetings}
             renderItem={renderMeetingItem}
             keyExtractor={(item, index) => item.id}
             ListFooterComponent={<View style={{marginTop: 100}}/>}
             showsVerticalScrollIndicator={false}
             ListEmptyComponent={<NoItems message={isHistory? "You don't have any past meetings.":"You don't have pending or ongoing meetings."}/>}
             refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
         />  
         
            }
       
            <Loader visible={isLoading} message="Creating meeting..."/>
    </View>
}

MeetingsContainer.navigationOptions = ()=>({
    header: null
})

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    centerEmptySet: { 
        justifyContent: 'center', 
        alignItems: 'center',
         height: '100%' 
    },
    headerRight:{
        marginRight: 10,
        fontSize: AppStyles.sizes.defaultTextSize, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4
    },
    cardContainer:{
        height: 90,
        borderRadius: 0,
        justifyContent: "center",
        backgroundColor: AppStyles.colors.primary,
        elevation: 3
    },
    groupIcon:{
        width: 30,
        height: 20
    },
    groupContainer:{
        marginHorizontal: 15
    },
    groupDetailsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    groupDetailsText:{
        color: "white",
        flex: 0.7,
        opacity: 0.7

    },
    groupNumberContainer:{
        flexDirection: "row",
        alignItems: "center",
        flex: 0.2
    },
    groupNumber:{
        fontSize: AppStyles.sizes.defaultTextSize,
        marginRight: 5,
        color: "white"
    },
    groupTitle:{
        fontSize: 21,
        color: "white",
    }
})

export default withUserHOC(MeetingsContainer);
