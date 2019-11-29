import React, {useState, useEffect} from 'react'
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager } from 'react-native'
import PropTypes from 'prop-types'
const HEIGHT = Dimensions.get('screen').height
const KeyboardShift = (props)=>{
    
    const [shift, setShift] = useState(HEIGHT-90)

    const handleKeyboardDidShow = (event)=>{
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInput.State.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
        if (gap >= 0) {
            return;
        }
        setShift(HEIGHT-80-keyboardHeight)
        // Animated.timing(
        //     shift,
        //     {
        //     toValue: gap,
        //     duration: 200,
        //     useNativeDriver: true,
        //     }
        // ).start();
        });
    }

    const handleKeyboardDidHide = ()=>{
        // Animated.timing(
        //     shift,
        //     {
        //       toValue: 0,
        //       duration: 200,
        //       useNativeDriver: true,
        //     }
        //   ).start();
        setShift(HEIGHT-90)
        
    }

    useEffect(() => {
        const keyboardDidShowSub = Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow)
        const keyboardDidHideSub = Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide)
        return () => {
            keyboardDidHideSub.remove()
            keyboardDidShowSub.remove()
        };
    }, []);

    return <Animated.View style={[styles.container, {height: shift}]}>
        {props.children}
    </Animated.View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
    }
});

KeyboardShift.propTypes = {
    children: PropTypes.object.isRequired
};

export default KeyboardShift;