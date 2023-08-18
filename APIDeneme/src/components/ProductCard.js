import React from "react";
import { View,Text,Image, TouchableWithoutFeedback } from "react-native";
import styles from './ProductCard_Style';

function ProductCard({product, onSelect}){
    return(
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.main}>
                <View style ={styles.image_body}>
                    <Image style={styles.images} source={product.image}/>
                </View>

                <View style={styles.text_body}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} $</Text>
                </View>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default ProductCard;