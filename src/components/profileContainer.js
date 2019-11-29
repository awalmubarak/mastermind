import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import Input from "../components/input"
import Button from '../components/button'
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler'
import AppStyles from '../commons/AppStyles'

const ProfileContainer = ({navigation, children, prevAction, nextAction, title, step})=>{
    return <View style={styles.container}>
        <View style={{flex: 1}}>
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
                {step>1 && <TouchableOpacity style={styles.skipButton} onPress={nextAction}>
                    <Text style={styles.skipText}>Skip this step</Text>
                </TouchableOpacity>}
            </View>
            
            
        </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyles.colors.primary,
        flex: 1
    },
    headerContainer:{
        marginHorizontal: 20,
        flex: 0.2,
        justifyContent: "center",
        height: 110
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
        borderRadius:20,
        height: 500,
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
        borderColor: AppStyles.colors.primary,
        borderWidth: 1,
    },
    prevText: {
        color: AppStyles.colors.primary
    },
    skipText:{
        borderBottomColor: AppStyles.colors.primary,
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