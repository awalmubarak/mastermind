import React from 'react'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const Loader = ({message, visible})=>{
    return <OrientationLoadingOverlay
            visible={visible}
            color="white"
            indicatorSize={60}
            messageFontSize={24}
            message={message}
            />
}

export default Loader;