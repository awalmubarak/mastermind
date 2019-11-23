import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import AppStyles from '../commons/AppStyles'

const renderHeaderComponent = (groupData)=>{
    return <View style={styles.container}>
    <Text style={styles.groupTitle}>{groupData.title}</Text>
    <View style={styles.headedTextContainer}>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.body}>{groupData.description} </Text>
    </View> 

    <View style={styles.headedTextContainer}>
        <Text style={styles.heading}>Niche</Text>
        <Text style={styles.body}>{groupData.niche}</Text>
    </View> 

    <View style={styles.headedTextContainer}>
        <Text style={styles.heading}>Experince Level</Text>
        <Text style={styles.body}>{groupData.experience}</Text>
    </View>

    <View style={styles.headedTextContainer}>
        <Text style={styles.heading}>Creator</Text>
        <Text style={styles.body}>{groupData.creator.name}</Text>
    </View> 

      <View style={styles.headedTextContainer}>
        <Text style={styles.heading}>Members</Text>
        <Text style={styles.body}>34</Text>
    </View> 
    
</View>     
}

const GroupDetailsScreen = ({navigation})=>{
    const group = navigation.getParam('group', null);
    const groupData = group.data()

    return <View style={styles.container}>
    
    <FlatList
        showsVerticalScrollIndicator={false}
        data={["Bob", "Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon", "Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon","Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon","Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon","Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon","Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon","Samuel Allotey", "Henry Say", "Donald Trump", "Charles Memphis", "Brains Goddon"]}   
        keyExtractor={(item, index)=>index.toString()}  
        ListHeaderComponent={renderHeaderComponent(groupData)}   
        renderItem={({item})=>(<TouchableOpacity onPress={()=>props.navigation.navigate("ProfileDetails", {isCurrentUser: false})}>
            <ListItem
            title={item}
            // leftAvatar={{source: require("../assets/user-white.png")}}
            avatarStyle={{backgroundColor:'red' }}
            topDivider
            leftElement={<Image
                style={{width: 34, height: 34, borderRadius: 17, backgroundColor: "#067b7a"}}
                source={require("../assets/user-white.png")}
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
