import React from 'react'
import { View, StyleSheet, Text,Linking } from 'react-native'
import AppStyles from '../commons/AppStyles'
import Autolink from 'react-native-autolink';


const HeadedText = ({heading, body, style})=>{
    return <View style={[styles.headedTextContainer, style&& style]}>
    {/* <Hyperlink 
        linkStyle={ { color: '#2980b9'} }>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.body} selectable={selectable}>{body} </Text>
    </Hyperlink> */}
    <Autolink style={styles.heading} text={heading}/>
    <Autolink style={styles.body} selectable text={body}/>
</View> 
}

const styles = StyleSheet.create({
    headedTextContainer:{
        marginVertical: 10
    },
    heading:{
        fontSize: 18,
        fontFamily:"Brown-Bold",
        marginBottom: 2
    },
    body:{
        fontSize: AppStyles.sizes.defaultTextSize
    }
})

export default HeadedText;