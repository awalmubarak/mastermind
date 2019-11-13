import React from 'react'
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import GroupItem from '../components/groupItem'


const GroupsScreen = ({navigation})=>{
    const groupItemClicked = (item)=>{
        navigation.navigate('JoinGroup');
    }

    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
        <FlatList 
            data={[1,2,3,4,5,6,7,8,9,11,10,12,13,14,15,16,17,18]}
            renderItem={({item})=> (<TouchableOpacity onPress={()=>groupItemClicked(item)}>
                <GroupItem/>
            </TouchableOpacity>)}
            keyExtractor={item => item}
            ListFooterComponent={<View style={{marginTop: 100}}/>}
            showsVerticalScrollIndicator={false}
        />      
    </View>
}
GroupsScreen.navigationOptions = ({navigation})=>({
    headerLeft: <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../assets/menu.png')} style={{width:25, height: 25, marginLeft: 10, padding:10}}/>
    </TouchableOpacity>
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 4
    }
    
})

export default GroupsScreen;