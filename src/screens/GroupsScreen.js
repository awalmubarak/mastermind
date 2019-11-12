import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import GroupItem from '../components/groupItem'

const GroupsScreen = ()=>{
    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
        
        <GroupItem/>
        <GroupItem/>
        <GroupItem/>
        
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 4
    },
    
})

export default GroupsScreen;