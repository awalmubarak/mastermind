import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import MeetingsContainer from '../components/meetingsContainer'

const MeetingsScreen = (props)=>{
    return <MeetingsContainer {...props} isHistory={false}/>
}

MeetingsScreen.navigationOptions = ({navigation})=>{
    return {
    title: "date",
    headerRight: (<TouchableOpacity style={{
        marginRight: 10,
        fontSize: 15, 
        borderColor: "white", 
        borderWidth: 1,
        padding: 4
    }} onPress={navigation.getParam('showModal')}>
        <Text style={{color: "white"}}>Creat Meeting</Text>
    </TouchableOpacity>)
}}

export default MeetingsScreen;
