import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppStyles from '../commons/AppStyles'

const MeetingItem = ({navigation, isHistory, meeting})=>{
    let datebg = ""
    let borderColor = "#bdbdbd"
    if(!isHistory){
        if(meeting.status==="started"){
            datebg = "#30b844"
            borderColor = "#30b844"
        }else{
            datebg = "#bfbfbf"
            borderColor = AppStyles.colors.primary
        }
    }
     
    return <View style={{
        flexDirection: "row",
        height: 70,
        justifyContent: "space-around",
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor,
        borderRadius: 3
    }}>
        <View style={{
        flex: 0.3,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRightWidth: 1,
        borderColor,
        backgroundColor: datebg
    }}>
            <Text style={{
            textAlign: "center",
            fontSize:19,
            color: isHistory?"#242424": "white",
    }}>{meeting.date}</Text>
        <Text style={{color:isHistory?"#242424": "white", borderTopColor: isHistory?"#242424": "white", borderTopWidth: 0.3, fontSize: 12.5}}>{meeting.time}</Text>
        </View>

        <View style={{
        flex: 0.7,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }}>
        <Text style={{
        textAlign: "center",
        fontSize: 16
    }} numberOfLines={2}>{meeting.title}</Text>
        </View>

    </View>
}
export default MeetingItem;