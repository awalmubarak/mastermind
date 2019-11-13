import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

const MeetingItem = ({navigation})=>{
    return <View style={styles.container}>
        <View style={styles.dateContainer}>
            <Text style={styles.dateText}>13th Oct 2017</Text>
        </View>

        <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={2}>Second Meeting of the month</Text>
        </View>

        {/* <TouchableOpacity style={styles.actionContainer}>
            <Text style={styles.actionText}>Start</Text>
        </TouchableOpacity> */}
    </View>
}

styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: 70,
        justifyContent: "space-around",
        marginVertical: 10,
        marginHorizontal: 10
    }, 
    dateContainer:{
        flex: 0.3,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#bdbdbd"
    },
    titleContainer:{
        flex: 0.7,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#bdbdbd"
    },
    actionContainer:{
        flex: 0.2,
        elevation: 4,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#067b7a"
    },
    dateText:{
        textAlign: "center",
        fontSize:19
    },
    titleText:{
        textAlign: "center",
        fontSize: 16
    },
    actionText:{
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
    
})

export default MeetingItem;