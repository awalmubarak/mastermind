import React from 'react'
import { View, StyleSheet, Text,Linking } from 'react-native'
import AppStyles from '../commons/AppStyles'
import Hyperlink from 'react-native-hyperlink'

const HeadedText = ({heading, body, style, selectable})=>{
    return <View style={[styles.headedTextContainer, style&& style]}>
    <Hyperlink 
        linkStyle={ { color: '#2980b9'} }>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.body} selectable={selectable}>{body} </Text>
    </Hyperlink>
</View> 
}

const styles = StyleSheet.create({
    headedTextContainer:{
        marginVertical: 10
    },
    heading:{
        fontSize: 18,
        fontFamily:"Brown_Pro_Bold",
        marginBottom: 2
    },
    body:{
        fontSize: AppStyles.sizes.defaultTextSize
    }
})

export default HeadedText;