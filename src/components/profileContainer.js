import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const ProfileContainer = ({navigation, children, prevAction, nextAction, title, step})=>{
    return <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />
        <View style={styles.headerContainer}>
            <Text style={styles.greetingText}>Step {step} / 3</Text>
            <Text style={styles.actionText}>{title}</Text>
        </View>

        <View style={styles.cardContainer}>
            {children}

            <View style={styles.buttonActions}>
                <View style={styles.actionContainer}>
                    {step>1 && <Button 
                        text="Previous" 
                        style={[styles.actions,styles.actionPrev]}
                        textStyle={styles.prevText}
                        onPress={()=>prevAction()}
                        />}
                    <Button 
                        text={step==3? "Finish": "Next"} 
                        style={styles.actions}
                        onPress={()=>nextAction()}
                        />
                </View>
                {step>1 && <TouchableOpacity style={styles.skipButton}>
                    <Text style={styles.skipText}>Skip this step</Text>
                </TouchableOpacity>}
            </View>
            
            
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#067b7a',
        flex: 1
    },
    headerContainer:{
        marginHorizontal: 20,
        flex: 0.2,
        justifyContent: "center"
    },
    greetingText:{
        color: "white",
        opacity: 0.5
    },
    actionText:{
        color: "white",
        fontSize: 30
    },
    cardContainer:{
        backgroundColor: "white",
        elevation: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 0.8,
        paddingTop: 20
    },
    formContainer:{
        marginHorizontal: 20
    },
    input:{
        height: 150,
        marginTop: 8
    },
    actionContainer:{
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20
    },
    actions: {
        flex: 0.4
    },
    actionPrev:{
        backgroundColor: "white",
        borderColor: "#067b7a",
        borderWidth: 1,
    },
    prevText: {
        color: "#067b7a"
    },
    skipText:{
        borderBottomColor: "#067b7a",
        borderBottomWidth: 1,
        color: "#8c8c8c"
    },
    skipButton:{
        alignSelf: "center",
        flex: 0.5
    },
    buttonActions:{
        flex: 1
    }

})

export default ProfileContainer;