import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import MeetingItem from '../components/meetingItem'

const MeetingsScreen = ()=>{
return <View style={styles.container}>
    <View style={styles.cardContainer}>
        <View style={styles.groupContainer}>
        <Text style={styles.groupTitle} numberOfLines={1}>Groups Masters A </Text>
        <View style={styles.groupDetailsContainer}>
            <Text style={styles.groupDetailsText}><Text>Facilitator: </Text>Frederick Bans Gondita</Text>
            <View style={styles.groupNumberContainer}>
                <Text style={styles.groupNumber}>25</Text>
                <Image source={require('../assets/group-white.png')} style={styles.groupIcon}/>
            </View>
        </View>
        </View>
    </View>

    <MeetingItem/>
</View>
}

MeetingsScreen.navigationOptions = ()=>({
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
        fontSize: 15, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4
    },
    cardContainer:{
        height: 90,
        borderRadius: 0,
        justifyContent: "center",
        elevation: 0.5,
        backgroundColor: "#067b7a",
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
        fontSize: 15,
        marginRight: 5,
        color: "white"
    },
    groupTitle:{
        fontSize: 21,
        color: "white",
    }
})

export default MeetingsScreen;
