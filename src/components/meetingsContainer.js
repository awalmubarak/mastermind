import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native'
import MeetingItem from './meetingItem'
import { Header } from 'react-native-elements';
import moment from "moment"
import CreateMeetingModal from './createMeetingModal';
import AppStyles from '../commons/AppStyles';



const MeetingsContainer = ({navigation, data, isHistory})=>{
    const [modalVisible, setModalVisible] = useState(false)
    const [dateTime, setDateTime] = useState({
        show: false,
        date: moment().format("D MMM YYYY"),
        time: moment().format("HH:mm"),
        mode: "date"
    })
    const renderMeetingItem = ({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
            <MeetingItem item={item} isHistory={isHistory? true: false}/>
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
    
return <View style={styles.container}>
    <Header
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
        />
    <View style={styles.cardContainer}>
        <CreateMeetingModal
            isVisible={modalVisible}
            date={dateTime.date}
            time={dateTime.time}
            createMeeting={()=>setModalVisible(false)}
            cancel={()=>setModalVisible(false)}
            mode={dateTime.mode}
            showPicker={showPicker}
            setDate={setDate}
            show={dateTime.show}
        />
        <View style={styles.groupContainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate("GroupDetails")}}>
                <Text style={styles.groupTitle} numberOfLines={1}>Groups Masters A </Text>
            </TouchableOpacity>
        <View style={styles.groupDetailsContainer}>
            <Text style={styles.groupDetailsText}><Text>Facilitator: </Text>Frederick Bans Gondita</Text>
            <View style={styles.groupNumberContainer}>
                <Text style={styles.groupNumber}>25</Text>
                <Image source={require('../assets/group-white.png')} style={styles.groupIcon}/>
            </View>
        </View>
        </View>
    </View>
    <FlatList 
            data={[1,2,3,4,5,6,7,8,9,11,10,12,13,14,15,16,17,18]}
            renderItem={renderMeetingItem}
            keyExtractor={item => item.toString()}
            ListFooterComponent={<View style={{marginTop: 100}}/>}
            showsVerticalScrollIndicator={false}
        />  
        
</View>
}

MeetingsContainer.navigationOptions = ()=>({
    title: "",
    headerRight: (<TouchableOpacity style={{
        marginRight: 10,
        fontSize: 15, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4
    }}>
        <Text style={{color: "white"}}>Create Meeting</Text>
    </TouchableOpacity>)
})

const styles = StyleSheet.create({
    container:{
        flex: 1
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

export default MeetingsContainer;
