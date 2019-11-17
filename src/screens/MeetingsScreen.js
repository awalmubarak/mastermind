import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import MeetingsContainer from '../components/meetingsContainer'

const MeetingsScreen = (props)=>{
    return <MeetingsContainer {...props} isHistory={false}/>
}

export default MeetingsScreen;
