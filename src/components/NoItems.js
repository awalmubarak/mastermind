import React from 'react'
import { View, Text } from 'react-native'

const NoItems = ({message})=>{
    return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text style={{fontSize: 18, opacity: 0.5, textAlign: "center"}}>{message}</Text>
</View>
}
export default NoItems;