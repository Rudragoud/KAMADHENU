import React from 'react'
import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';

const PreviousD = () => {

  const navigation = useNavigation()

  const deliveredData = [
    {
    id: "1",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "2",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "3",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "4",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "5",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "6",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "7",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "8",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "9",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "10",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
  
    {
    id: "11",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "12",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "13",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "14",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
    {
    id: "15",
    ProductName: "Earnest Green",
    CustOrderID:"900",
    CustomerID:"kengeri",
    date:'25/09/22',
    price:"900"
    },
  ];



  return (
    <View>
      <View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("DDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Product Name</DataTable.Title>
        <DataTable.Title>C-ID</DataTable.Title>
        <DataTable.Title>Order ID</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
      </DataTable.Header>
     
     

{deliveredData.map((booth)=>{
        return  <DataTable.Row key={booth.id}>
        <DataTable.Cell>{booth.ProductName}</DataTable.Cell>
        <DataTable.Cell>{booth.CustomerID}</DataTable.Cell>
        <DataTable.Cell>{booth.CustOrderID}</DataTable.Cell>
        <DataTable.Cell>{booth.date}</DataTable.Cell>
        <DataTable.Cell>{booth.price}</DataTable.Cell>
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
  }

  

})


export default PreviousD