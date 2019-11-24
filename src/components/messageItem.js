import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import AppStyles from '../commons/AppStyles'
import { UserContext } from '../contexts/UserContext'
import moment from 'moment'

const renderIncomingMessage = (message)=>{
    return <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 5,
        marginHorizontal: 10}}>
        <View style={{
        flex: 0.7,
        alignItems: "flex-start" }}>
        <Text style={{
        width: "100%",
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
        color:"#067b7a"}}>{message.sender.name}</Text>
        <View style={{
        padding: 5,
        borderWidth: 1,
        borderColor: "#bdbdbd",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,}}>
            <Text style={{
        fontSize: 16,
        lineHeight: 20}}>{message.text}</Text>
        </View>
            {message.createdAt && <Text style={{fontSize: 12, color: 'grey'}}>{moment(message.createdAt.toDate()).format("HH:mm")}</Text>}
            
        </View> 
    </View>
}

const renderOutGoingMessage = (message)=>{
    return <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginVertical: 7,
        marginHorizontal: 10,
        opacity: message.createdAt? 1: 0.6
        }}>
       <View style={{
           flexDirection: "row",
           justifyContent: "flex-end",
           }}>
        <View style={{
            flex: 0.7,
            alignItems: "flex-end"
            }}>
            <Text style={{
            fontSize: 16,
            padding: 5,
            borderWidth: 1,
            borderTopLeftRadius: 10,
            borderColor: message.createdAt?AppStyles.colors.primary:"#f24949",
            borderBottomLeftRadius: 10,
            lineHeight: 20}} > {message.text}</Text>
            {message.createdAt && <Text style={{fontSize: 12, color: 'grey'}}>{moment(message.createdAt.toDate()).format("HH:mm")}</Text>}
            
            </View>
       </View>
    </View>
}

const MessageItem = ({message})=>{
    const {user} = useContext(UserContext)
    if(user.uid===message.sender.id){
        return renderOutGoingMessage(message)
    }
    return renderIncomingMessage(message)
}

export default React.memo(MessageItem);