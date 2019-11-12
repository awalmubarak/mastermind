import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Card from './card'
import { TouchableHighlight } from 'react-native-gesture-handler'

const GroupItem = ()=>{
return <TouchableHighlight>
    
    <View style={styles.cardContainer}>
        <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Groups Masters A </Text>
        <View style={styles.groupDetailsContainer}>
            <Text style={styles.groupDetailsText}><Text>Facilitator: </Text>Frederick Bans Gondita</Text>
            <View style={styles.groupNumberContainer}>
                <Text style={styles.groupNumber}>25</Text>
                <Image source={require('../assets/group.png')} style={styles.groupIcon}/>
            </View>
        </View>
        </View>
    </View>
</TouchableHighlight>
}

const styles = StyleSheet.create({
    cardContainer:{
        height: 90,
        borderRadius: 0,
        justifyContent: "center",
        elevation: 0.5,
        marginVertical: 3
    },
    groupIcon:{
        width: 30,
        height: 20
    },
    groupContainer:{
        marginHorizontal: 10
    },
    groupDetailsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    groupDetailsText:{
        color: "#5e5e5e",
        flex: 0.7

    },
    groupNumberContainer:{
        flexDirection: "row",
        alignItems: "center",
        flex: 0.2
    },
    groupNumber:{
        fontSize: 15,
        marginRight: 5,
        color: "#5e5e5e"
    },
    groupTitle:{
        fontSize: 19,
        color: "#067b7a",
    }
})

export default GroupItem;
