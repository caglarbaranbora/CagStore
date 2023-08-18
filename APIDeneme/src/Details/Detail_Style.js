import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    
    main: {
        flex:1 ,
    },
    image: {
        flex:1,
        height: Dimensions.get('window').height /2,
        widht: Dimensions.get('window').width / 2, 
        margin:10,
    },
    body: {
        backgroundColor: '#7ca4a9',
        padding:10,
        margin:10,
    },  
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    descripton: {
        color: 'white',
        paddingTop: 10,
    },
    price: {
        color:'green',
        textAlign: 'right',
        fontWeight: 'bold',    
    },
})