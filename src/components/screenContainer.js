import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native'


const ScreenContainer = ({ children, title, subTitle})=>{
    return <ScrollView>
        <View style={styles.container}>
        <StatusBar backgroundColor="#067b7a" barStyle="light-content" />
        <View style={styles.headerContainer}>
            {subTitle && <Text style={styles.greetingText}>{subTitle}</Text>}
            <Text style={styles.actionText}>{title}</Text>
        </View>

        <View style={styles.cardContainer}>
            {children}
            
        </View>
    </View>
    </ScrollView>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#067b7a',
        flex: 1
    },
    headerContainer:{
        marginHorizontal: 20,
        height: 110,
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
    
})

export default ScreenContainer;