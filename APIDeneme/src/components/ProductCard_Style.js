import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#7ca4a9',
        borderRadius: 10,
    },
    image_body: {
        margin: 5,
        borderRadius: 10,
        flex:1 ,
        backgroundColor: 'white',
    },
    images: {
        height: Dimensions.get('window').height /2,
        widht: Dimensions.get('window').width /2,
    },
    text_body:{
        flex:1,
        padding:10,
    },
    title:{
        fontWeight: 'bold',
        color: 'black',

    },
    price:{
        textAlign:'right',
        justifyContent: 'space-between',
        color: 'green',
        padding: 5,
        fontWeight: 'bold',
    },
})