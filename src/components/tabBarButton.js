import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import AppStyles from '../commons/AppStyles'


export default function TabBarButton({onPress, routeName, focused}){
    return <TouchableOpacity onPress={onPress} style={{flex:1, justifyContent: "center", alignItems: "center", borderColor: focused? AppStyles.colors.primary: "#c4c4c4", borderWidth: 1, opacity: focused? 1: 0.5}}>
    <View >
            <Text style={{color: focused? AppStyles.colors.primary: "grey"}}>{routeName=="UpcomingMeetings"? "Upcoming Meetings": "Meetings History"}</Text>
    </View>
    </TouchableOpacity>

}