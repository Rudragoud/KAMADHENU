import { View, Text , Image ,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
const Delivery = () => {

const navigation=useNavigation()



const deliveredData = [
  {
  id: "1",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "2",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "3",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "4",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "5",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "6",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "7",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "8",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "9",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "10",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },

  {
  id: "11",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "12",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "13",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "14",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
  {
  id: "15",
  name: "Earnest Green",
  product:8988989876,
  price:"kengeri",
  pincode:560060,
  quantity:10,
  date:'25/09/22'
  },
];

  return (

    <View>
      <View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("FDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.heading}>Delivered Data</Text>
      </View>

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>Booth id</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Product</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        <DataTable.Title>Quantity</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
      </DataTable.Header>
     
   

      {deliveredData.map((booth)=>{
        return  <DataTable.Row key={booth.id}>
        <DataTable.Cell>{booth.id}</DataTable.Cell>
        <DataTable.Cell>{booth.name}</DataTable.Cell>
        <DataTable.Cell>{booth.product}</DataTable.Cell>
        <DataTable.Cell>{booth.price}</DataTable.Cell>
        <DataTable.Cell>{booth.quantity}</DataTable.Cell>
        <DataTable.Cell>{booth.date}</DataTable.Cell>
      </DataTable.Row>
      })}
      
    </DataTable>
    </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start'
    },
    innerContainer:{
        padding:30
        
    },
    imgHome:{
        width:30,
        height:30,

    },
    tableHeader:{
      backgroundColor:'yellow'
    },
    heading:{
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginBottom:20
    
    },
  
    

})

export default Delivery