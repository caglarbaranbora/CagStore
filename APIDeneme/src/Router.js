import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Products from "./pages/products/Products";
import Detail from "./Details/Detail";

const Stack = createNativeStackNavigator();

export default function App(){

  // function fetchData(){
  //   console.log('1');
  //   //const response = axios.get('https://jsonplaceholder.typicode.com/users');//data cekmek icin
  //   axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then(response => {console.log(response); console.log('2');})
  //   .catch(error => console.log(error));
  //   //veri saglam donuyorsa then, veri bozuk donuyorsa catch
  //   // axios.post('https://jsonplaceholder.typicode.com/users', {});
  //   console.log('3');
  //   //burada ne zaman cevap gelirse o zaman donut sunar bize
  //   //o nedenle 1-3-2 siralamasiyla doner aslinda get ile islem baslar
  //   //fakat then'den veri donmedigi icin ekrana bastirilmaz donunce bastirilir
  // }

  // async function fetchData(){
  //   console.log('1');

  //   const response = await axios //burada cevap gelene kadar bekle dedik
  //   .get('https://jsonplaceholder.typicode.com/users');
  //   console.log('2');
  //   console.log(response);
  //   console.log('3');
  // }
  
//   const [loading, setLoading] = useState(true);
//   const [userList, setUserList] = useState([]);

//   const URL ='https://jsonplaceholder.typicode.com/users';

//   async function fetchData(){
//     // const response = await axios.get(URL);
//     // setLoading(false);
//     // setUserList(response.data);
    
//     await axios.get(URL)
//     .then(response => {
//       setLoading(false);
//       setUserList(response.data);
//     });
//   }

//   const renderUser = ({item}) => (  
//     <UserCard name={item.name}  username={item.username} email={item.email}/>
//   );

//  useEffect(()=> {
//   fetchData();
//  }, [])

//   return(
//   <SafeAreaView>
//   {
//       loading ? (<ActivityIndicator size='large'/>) : 
//     ( 
//       <FlatList
//       ListFooterComponent={<Button title="Fetch Data" onPress={fetchData}/>}
//       data={userList}
//       renderItem={renderUser}
//       />    
//     )
//   }
//   </SafeAreaView>
//   );

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Products'
        component={Products}
        options={{
        title: 'CAGSTORE',
        headerStyle: {backgroundColor: '#7ca4a9'},
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'white', fontWeight: 'bold', fontSize: 42}
        }}
        />
        <Stack.Screen 
        name='Details' 
        component={Detail}
        options={{
          title: 'DETAILS',
          headerStyle: {backgroundColor: '#7ca4a9'},
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white', fontSize: 20}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
