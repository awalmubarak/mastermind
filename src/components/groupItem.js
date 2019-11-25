import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import AppStyles from '../commons/AppStyles'

const GroupItem = ({group})=>{    
        
return <View style={styles.cardContainer}>
        <View style={styles.groupContainer}>
        <Text style={styles.groupTitle} numberOfLines={1}>{group.title} </Text>
        <View style={styles.groupDetailsContainer}>
            <Text style={styles.groupDetailsText}><Text>Facilitator: </Text>{group.creator.name}</Text>
            <View style={styles.groupNumberContainer}>
                <Text style={styles.groupNumber}>{group.memberCount && group.memberCount}</Text>
                <Image source={require('../assets/group.png')} style={styles.groupIcon}/>
            </View>
        </View>
        </View>
    </View>
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
        flex:0.8,
        color: "#5e5e5e",

    },
    groupNumberContainer:{
        flexDirection: "row",
        alignItems: "center",
        flex: 0.2
    },
    groupNumber:{
        fontSize: AppStyles.sizes.defaultTextSize,
        marginRight: 5,
        color: "#5e5e5e"
    },
    groupTitle:{
        fontSize: 19,
        color: "#212121",
    }
})

export default GroupItem;
