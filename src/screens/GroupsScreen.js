import React, {useEffect, useState, useContext} from 'react'
import { StyleSheet,Text, View, Image, StatusBar, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import GroupItem from '../components/groupItem'
import { getAllUserGroups } from '../firebase/GroupsApi'
import firestore from '@react-native-firebase/firestore';
import { UserContext } from '../contexts/UserContext';



    const GroupsScreen = ({navigation, context})=>{
        const [groups, setGroups] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [refreshing, setRefreshing] = useState(false)
        const {user} = useContext(UserContext)

        const groupItemClicked = (item)=>{
            navigation.navigate('MeetingsTab', {group: item});
    }

    const onRefresh = ()=>{
        setRefreshing(true)
        async function getUserGroups(){
            const userGroups = await getAllUserGroups(user)
            setGroups(userGroups)
            setRefreshing(false)            
        }
        getUserGroups()
    }
    

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('user_groups')
      .doc(user.uid)
      .collection("groups")
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const userGroups = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data(),
            id: documentSnapshot.id, // required for FlatList
          };
        });
 
        setGroups(userGroups)
 
        if (isLoading) {
          setIsLoading(false);
        }
      });
 
      return () => unsubscribe(); // Stop listening for updates whenever the component unmounts
  }, []);
 

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
                <GroupItem group={item}/>
            </TouchableOpacity>)}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View style={{marginTop: 100}}/>}
            ListEmptyComponent={<NoGroupsComponent/>}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
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