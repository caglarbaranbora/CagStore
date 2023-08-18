import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Detail_Style';
import useFetch from "../hooks/useFetch/UseFetch";
import Config from "react-native-config";
import Loading from "../components/loading/Loading";


const  Detail = ({route}) => {
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

    if(loading){
        return  <Loading/>//<Loading/>
    }
    if(error){
        return  <Error/>//<Error/>
    }

    return(
        <View style={styles.main}>
                <Image style ={styles.image}source= {{uri: data.image}}/>
        <View style={styles.body}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.descripton}>{data.description}</Text>
            <Text style={styles.price}>{data.price} $</Text>
        </View>
        </View>
    );
}

export default Detail;