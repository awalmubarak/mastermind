import React from 'react'
import MeetingsContainer from '../components/meetingsContainer'

const MeetingsScreen = (props)=>{
    return <MeetingsContainer {...props} isHistory={false}/>
}

export default MeetingsScreen;
