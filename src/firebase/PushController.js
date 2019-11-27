import React, {Component} from "react";
import PushNotification from "react-native-push-notification";
import { setNotificationKey } from "./FirebaseAuth";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import auth from '@react-native-firebase/auth';
import {UserContext} from "../contexts/UserContext"


export default class PushController extends Component{
    static contextType = UserContext

    constructor(props){
        super(props)
        var self = this
    }
    componentDidMount(){
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: (token)=> {
                const user = auth().currentUser;
                if(user){
                    if(this.context.profile.fcmtoken!==token.token){
                        console.log("sending token");
                        
                        setNotificationKey(user, token, ()=>{
                            this.context.setProfile({...this.context.profile, fcmtoken:token.token})
                            console.log("token sent");
                            
                        })
                    }
                }
            },
          
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
              console.log("NOTIFICATION:", notification);
              
              // required on iOS only 
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            // Android only
            senderID: "74421600413",
            // iOS only
            permissions: {
              alert: true,
              badge: true,
              sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
          });
    }

    render(){
        return null;
    }
}