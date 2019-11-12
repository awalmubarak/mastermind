import React from 'react'
import { StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import GroupItem from '../components/groupItem'

const GroupsScreen = ()=>{
    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
        
        <GroupItem/>
        <GroupItem/>
        <GroupItem/>
        
    </View>
}
GroupsScreen.navigationOptions = ({navigation})=>({
    headerLeft: <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../assets/menu.png')} style={{width:25, height: 25, marginLeft: 10}}/>
    </TouchableOpacity>
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 4
    },
    
})

export default GroupsScreen;