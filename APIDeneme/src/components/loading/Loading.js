import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function Loading(){
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}> 
            <LottieView source={require('../../assets/lottie/burgerloading.json')} autoPlay/>
        </View> 
    );
}
export default Loading;