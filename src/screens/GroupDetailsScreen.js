import React,{useEffect,useState,useContext} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image,ActivityIndicator,StatusBar, Clipboard } from 'react-native'
import { ListItem } from 'react-native-elements'
import AppStyles from '../commons/AppStyles'
import { getGroupById,getGroupMembers } from '../firebase/GroupsApi'
import { DropDownHolder } from '../commons/DropDownHolder'
import { UserContext } from '../contexts/UserContext'



const GroupDetailsScreen = ({navigation})=>{
    const {user} = useContext(UserContext)
    const groupInfo = navigation.getParam('group', null);
    const [group, setGroup] = useState(groupInfo)
    const [loading, setLoading] = useState(true)
    const [members, setMembers] = useState([])


    useEffect(() => {
        const getGroupDetails = async()=>{
            await getGroupById(group.id, (groupInfo)=>{
                setGroup(groupInfo)
                getGroupMembers(groupInfo.id, (groupMembers)=>{                    
                    setMembers(groupMembers)
                    setLoading(false)
                }, (error)=>{
                    DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);  
                })
            },
             (error)=>{
                DropDownHolder.dropDown.alertWithType('error', 'Error', error.message); 
            })
            
        }
        getGroupDetails()
        return () => {
            
        };
    }, [])


    const renderHeaderComponent = ()=>{

        return <View style={styles.container}>
        <Text style={styles.groupTitle}>{group.title}</Text>
        {(user.uid===group.creator.id)&& <TouchableOpacity onPress={()=>{
            Clipboard.setString(group.uid)
            DropDownHolder.dropDown.alertWithType('success', 'Success', 'Group ID Copied!!');
        }}>
            <View style={styles.headedTextContainer}>
            <Text style={[styles.heading, {color:"#4a9bff"}]}>Group ID (click to copy)</Text>
            <Text style={[styles.body,{color:"#4a9bff"}]}>{group.uid} </Text>
        </View>
            </TouchableOpacity>}
        <View style={styles.headedTextContainer}>
            <Text style={styles.heading}>About</Text>
            <Text style={styles.body}>{group.description} </Text>
        </View> 
    
        <View style={styles.headedTextContainer}>
            <Text style={styles.heading}>Niche</Text>
            <Text style={styles.body}>{group.niche}</Text>
        </View> 
    
        <View style={styles.headedTextContainer}>
            <Text style={styles.heading}>Experince Level</Text>
            <Text style={styles.body}>{group.experience}</Text>
        </View>
    
        <View style={styles.headedTextContainer}>
            <Text style={styles.heading}>Creator</Text>
            <Text style={styles.body}>{group.creator.name}</Text>
        </View> 
    
          <View style={styles.headedTextContainer}>
            <Text style={styles.heading}>Members</Text>
            <Text style={styles.body}>{group.memberCount}</Text>
        </View> 
        
    </View>     
    }

    if(loading){
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <StatusBar backgroundColor="#067b7a" barStyle="light-content" /> 
                <ActivityIndicator />
            </View>
        );
    }

    return <View style={styles.container}>
    
    <FlatList
        showsVerticalScrollIndicator={false}
        data={members}   
        keyExtractor={(item, index)=>index.toString()}  
        ListHeaderComponent={renderHeaderComponent()}   
        renderItem={({item})=>(<TouchableOpacity onPress={()=>navigation.navigate("MemberDetails", {isCurrentUser: false, user:item})}>
            <ListItem
            title={item.name}
            avatarStyle={{backgroundColor:'red' }}
            topDivider
            leftElement={<Image
                style={{width: 34, height: 34, borderRadius: 17, backgroundColor: "#067b7a"}}
                source={item.avatar}
                />}
        />
        </TouchableOpacity>)}
        ListFooterComponent={<View style={{marginBottom: 30}}/>}
    />   
    
</View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1
    },
    description:{
        fontSize: AppStyles.sizes.defaultTextSize
    },
    headedTextContainer:{
        marginVertical: 10
    },
    heading:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 2
    },
    body:{
        fontSize: AppStyles.sizes.defaultTextSize
    },
    groupTitle:{
        fontSize: 21,
        marginTop: 30,
        marginBottom: 10
    }
})
export default GroupDetailsScreen;
