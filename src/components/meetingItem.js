import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppStyles from '../commons/AppStyles'

const MeetingItem = ({navigation, isHistory, item})=>{
    const meeting = item.data()
    return <View style={{
        flexDirection: "row",
        height: 70,
        justifyContent: "space-around",
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: isHistory?"#bdbdbd": AppStyles.colors.primary,
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
        borderColor: isHistory?"#bdbdbd": AppStyles.colors.primary,
        backgroundColor: isHistory?"": "#bfbfbf"
    }}>
            <Text style={{
            textAlign: "center",
            fontSize:19,
            color: isHistory?"#242424": "white",
    }}>{meeting.date}</Text>
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