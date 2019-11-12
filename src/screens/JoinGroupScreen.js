import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ScreenContainer from '../components/screenContainer'
import Input from '../components/input'
import Button from '../components/button'

const JoinGroupScreen = ()=>{
    let step = 2;
    const renderStepOne = ()=>{
        return <View style={styles.container}>
            <Text style={styles.description}>Enter Mastermind Group ID to continue</Text>
            <Input label="Group ID"/>
           <Button text="Continue"/>
            
        </View>
    }
    const renderStepTwo = ()=>{
        return <View style={styles.container}>
            <Text style={styles.groupTitle}>Success Alliance CEOs Group</Text>
            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>About</Text>
                <Text style={styles.body}>This is a description about the group,
                     we are very well into tihs group and we want to make it big.  </Text>
            </View> 

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Niche</Text>
                <Text style={styles.body}>Accounting </Text>
            </View> 

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Experince Level</Text>
                <Text style={styles.body}>Newbies</Text>
            </View>

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Members</Text>
                <Text style={styles.body}>34</Text>
            </View>

            <View style={styles.headedTextContainer}>
                <Text style={styles.heading}>Creator</Text>
                <Text style={styles.body}>Sir Larbie Jonas</Text>
            </View> 

            <Button text="Join Now" style={{marginVertical: 20}}/>            
            
        </View>
    }
    return <ScreenContainer 
        title="Join Group">
        {step==1 && renderStepOne()}
        {step==2 && renderStepTwo()}
    </ScreenContainer>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 30
    },
    description:{
        fontSize: 15
    },
    headedTextContainer:{
        marginVertical: 10
    },
    heading:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 2
    },
    body:{
        fontSize: 15
    },
    groupTitle:{
        fontSize: 21,
        marginBottom: 10
    }
})

export default JoinGroupScreen;

