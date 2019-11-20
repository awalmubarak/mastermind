import React, {useEffect, useState} from 'react'
import { StyleSheet,Text, View, Image, StatusBar, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import GroupItem from '../components/groupItem'
import { GetAllGroups } from '../firebase/GroupsApi'
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';


const SREEN_HEIGHT = Dimensions.get("window").height
const GroupsScreen = ({navigation})=>{
    const [groups, setGroups] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const groupItemClicked = (item)=>{
        navigation.navigate('MeetingsTab');
    }
    
    

    useEffect(() => {
        async function getUserGroups(){
            const userGroups = await GetAllGroups()
            setGroups(userGroups)
            setIsLoading(false)            
        }
        getUserGroups()

        let query = firestore().collection('groups').orderBy('createdAt', 'desc');
        let observer = query.onSnapshot(querySnapshot => {
        console.log(`Received query snapshot of size ${querySnapshot.size}`);
        console.log(`Received query snapshot of data ${querySnapshot.docs}`);
        if(querySnapshot.size>0){
            const newData = [...querySnapshot.docs, ...groups] 
            console.log(newData);
                       
            setGroups(newData)
            
        }
        }, err => {
        console.log(`Encountered error: ${err}`);
        });
        return () => {
            observer
        };
    }, [])

    if(isLoading){
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <StatusBar backgroundColor="#067b7a" barStyle="light-content" /> 
                <ActivityIndicator />
            </View>
        );
    }

    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />   
        <FlatList 
        contentContainerStyle={groups.length === 0 && styles.centerEmptySet}
            data={groups}
            renderItem={({item})=> (<TouchableOpacity onPress={()=>groupItemClicked(item)}>
                <GroupItem item={item}/>
            </TouchableOpacity>)}
            keyExtractor={(item,index) => index.toString()}
            ListFooterComponent={<View style={{marginTop: 100}}/>}
            ListEmptyComponent={<NoGroupsComponent/>}
            showsVerticalScrollIndicator={false}
        />      
    </View>
}
GroupsScreen.navigationOptions = ({navigation})=>({
    headerLeft: (<TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../assets/menu.png')} style={{width:25, height: 25, marginLeft: 10, padding:10}}/>
    </TouchableOpacity>),
    title: "Mastermind Groups"
    
})

const NoGroupsComponent = ()=>{
    return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text style={{fontSize: 18, opacity: 0.5, textAlign: "center"}}>You don't have any groups yet. Groups you create or Join will display here.</Text>
</View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 4
    },
    centerEmptySet: { 
        justifyContent: 'center', 
        alignItems: 'center',
         height: '100%' 
    }

    
})

export default GroupsScreen;