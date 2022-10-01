import { View, Text , Image ,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
import axios from 'axios';
const Orders = ({navigation,route}) => {

const plantName=route.params

console.log(plantName)

const [orders,setOrders]=useState([])


async function fetchAllOrders(){
  const res = await axios.get( `http://192.168.29.227:8000/boothorder/${plantName}`)
  setOrders(res.data.boothorder)
  
}


useEffect(()=>{
fetchAllOrders()
},[])



  return (

    <View>
      


    <View>
      <Text style={styles.heading}>
        Orders
      </Text>
    </View>

      <ScrollView horizontal={true}>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>Order Id</DataTable.Title>
        <DataTable.Title>Booth name</DataTable.Title>
        <DataTable.Title>Product name</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        <DataTable.Title>Quantity</DataTable.Title>
        <DataTable.Title>Delivered date</DataTable.Title>
      </DataTable.Header>
     
     

{orders.map((order)=>{
        return  <DataTable.Row key={order.BO_ID}>
        <DataTable.Cell>{order.BO_ID}</DataTable.Cell>
        <DataTable.Cell>{order.B_NAME}</DataTable.Cell>
        <DataTable.Cell>{order.P_NAME}</DataTable.Cell>
        <DataTable.Cell>{order.BO_PRICE}</DataTable.Cell>
        <DataTable.Cell>{order.P_QUANTITY}</DataTable.Cell>
        <DataTable.Cell>{order.BO_DELIVERYDATE ? new Date(order.BO_DELIVERYDATE).getDate()+"/"+(new Date(order.BO_DELIVERYDATE).getMonth()+1)+"/"+new Date(order.BO_DELIVERYDATE).getFullYear() : "Pending" }</DataTable.Cell>
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

export default Orders