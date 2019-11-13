import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'


export default function TabBarButton({onPress, routeName, focused}){
    return <TouchableOpacity onPress={onPress} style={{flex:1, justifyContent: "center", alignItems: "center", borderColor: focused? "#067b7a": "#c4c4c4", borderWidth: 1, opacity: focused? 1: 0.5}}>
    <View >
            <Text style={{color: focused? "#067b7a": "grey"}}>{routeName=="UpcomingMeetings"? "Upcoming Meetings": "Meetings History"}</Text>
    </View>
    </TouchableOpacity>

}