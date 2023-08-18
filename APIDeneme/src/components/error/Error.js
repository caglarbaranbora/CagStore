import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";


function Error(){
    
    return (
        <View>
            <LottieView source={require('../../assets/lottie/burgererror.json')} autoPlay/>
        </View>
    );
    // const animation = useRef(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         animation.current.play();
    //     }, 100)     
    // }, [])
}

export default Error;