import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MeetingItem = ({navigation, isHistory})=>{
    return <View style={{
        flexDirection: "row",
        height: 70,
        justifyContent: "space-around",
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: isHistory?"#bdbdbd": "#067b7a",
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
        borderColor: isHistory?"#bdbdbd": "#067b7a",
        backgroundColor: isHistory?"": "#bfbfbf"
    }}>
            <Text style={{
            textAlign: "center",
            fontSize:19,
            color: isHistory?"#242424": "white",
    }}>13th Oct 2017</Text>
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
    }} numberOfLines={2}>Second Meeting of the month</Text>
        </View>

    </View>
}

// styles = StyleSheet.create({
//     meetingItemContainer:{
//         flexDirection: "row",
//         height: 70,
//         justifyContent: "space-around",
//         marginVertical: 10,
//         marginHorizontal: 10
//     }, 
//     dateContainer:{
//         flex: 0.3,
//         borderTopLeftRadius: 4,
//         borderBottomLeftRadius: 4,
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 10,
//         borderWidth: 1,
//         borderColor: "#bdbdbd"
//     },
//     titleContainer:{
//         flex: 0.7,
//         borderBottomRightRadius: 4,
//         borderTopRightRadius: 4,
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 10,
//         borderWidth: 1,
//         borderColor: "#bdbdbd"
//     },
//     dateText:{
//         textAlign: "center",
//         fontSize:19
//     },
//     titleText:{
//         textAlign: "center",
//         fontSize: 16
//     }
    
// })

export default MeetingItem;