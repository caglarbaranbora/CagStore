import React from "react";

import {View, FlatList} from "react-native";
import Config from "react-native-config";

import ProductCard from "../../components/ProductCard";
import styles from './Products_Style';
import useFetch from "../../hooks/useFetch/UseFetch";

import Error from "../../components/error/Error";
import Loading from '../../components/loading/Loading';


function Products({navigation}){

    const {error, loading, data} = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('Details', {id});
    }
    const productRenderer = ({item}) => <ProductCard  product={item} onSelect={() => handleProductSelect(item.id)}/>;
 
    if(loading){
        return  <Loading/>//<Loading/>
    }
    if(error){
        return  <Error/>//<Error/>
    }
    return(
        <View style = {styles.main}>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={()=> <View style={{height: 10}}/>}
                    data={data}
                    renderItem={productRenderer}
                    />
            </View>
        </View>
    );
}


export default Products;