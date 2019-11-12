import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenContainer from '../components/screenContainer'
import Input from '../components/input'
import Button from '../components/button'

const CreateGroupScreen = ()=>{
    return <ScreenContainer 
        title="New Mastermind Group">
        <View style={styles.container}>
            <Input label="Group Name" placeholder="e.g Success Alliance Group"/>
            <Input label="Description"  
                placeholder="short description about group"
                numberOfLines={5}
                multiline={true}
                style={styles.input}
                />
            <Input label="Niche" placeholder="e.g Startup CEOs, New Mothers etc"/>
            <Input label="Experience" placeholder="e.g Beginner, Senior Level etc"/>
            <Button text="Create Group"/>
            
        </View>
    </ScreenContainer>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
})

export default CreateGroupScreen;

