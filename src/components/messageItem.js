import React from 'react'
import { View, Text } from 'react-native'
import AppStyles from '../commons/AppStyles'

const renderIncomingMessage = ()=>{
    return <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 10,
        marginHorizontal: 10}}>
        <View style={{
        flex: 0.7,
        alignItems: "center" }}>
        <Text style={{
        width: "100%",
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
        color:"#067b7a"}}>Marine Hanaman</Text>
        <View style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "#bdbdbd",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,}}>
            <Text style={{
        fontSize: 16,
        lineHeight: 20}}>React Native is an open-source mobile application framework created by Facebook. It is used to d</Text>
        </View>
        </View> 
    </View>
}

const renderOutGoingMessage = ()=>{
    return <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: "flex-end"}}>
        <View style={{
        flex: 0.7,
        padding: 10,
        borderWidth: 1,
        borderColor: AppStyles.colors.primary,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10}}>
            <Text style={{
        fontSize: 16,
        lineHeight: 20}} > Web and UWP by enabling developers to use</Text>
        </View>
    </View>
}

const MessageItem = ({item})=>{
    if(item%2==0){
        return renderIncomingMessage()
    }
    return renderOutGoingMessage()
}

export default React.memo(MessageItem);