import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({style, children})=>{
    return <View style={[styles.cardContainer, style]}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: "white",
        elevation: 20,
        borderRadius: 10,
        flex: 1,
    },
})

export default Card;