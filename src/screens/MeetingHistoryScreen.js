import React from 'react'
import {  } from 'react-native'
import MeetingsContainer from '../components/meetingsContainer'

const MeetingsHistoryScreen = (props)=>{
    return <MeetingsContainer {...props} isHistory={true} />
}

export default MeetingsHistoryScreen;
