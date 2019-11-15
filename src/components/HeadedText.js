import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const HeadedText = ({heading, body, style})=>{
    return <View style={[styles.headedTextContainer, style&& style]}>
    <Text style={styles.heading}>{heading}</Text>
    <Text style={styles.body}>{body} </Text>
</View> 
}

const styles = StyleSheet.create({
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
    }
})

export default HeadedText;