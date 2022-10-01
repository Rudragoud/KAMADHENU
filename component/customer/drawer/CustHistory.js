import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import moment from 'moment/moment';

const CustHistory = ({navigation,route}) => {

    const usrID=route.params;
    const [orders,setOrders]=useState([])


    async function fetchHistory(){
      const res = await  axios.get(`http://192.168.29.227:8000/custorderhistory/${usrID}`)
      console.log(res.data.orders)
      setOrders(res.data.orders)

    }

    
    useEffect(()=>{
      fetchHistory()
    },[])



    
                                   
    


  return (
    <View style={styles.container}>



    <View >
       <Text style={styles.heading}>  Previous Orders</Text>
    </View>

      

      <ScrollView horizontal={true}>
      <DataTable >
      <DataTable.Header style={styles.tableHeader} >
      <DataTable.Title>Booth name</DataTable.Title>
        <DataTable.Title>Product name</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        <DataTable.Title>Quantity</DataTable.Title>
        <DataTable.Title>Delivery date</DataTable.Title>
      </DataTable.Header>
     
      {orders.map((order)=>{
        return  <DataTable.Row key={order.CO_ID}>
        <DataTable.Cell style={styles.pad}>{order.B_NAME}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{order.P_NAME}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{order.P_PRICE}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{order.P_QUANTITY}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{new Date(order.CO_DELIVERYDATE).getDate()+"/"+(new Date(order.CO_DELIVERYDATE).getMonth()+1)+"/"+new Date(order.CO_DELIVERYDATE).getFullYear()}</DataTable.Cell>
      </DataTable.Row>
      })}
     

   
      
    </DataTable>
    </ScrollView>


    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:20
    },

    imgHome:{
        width:30,
        height:30,

    },
    heading:{
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold',
        fontSize:30,
        marginBottom:20,
        marginRight:30
      },
    pad:{
      marginRight:30
    }
})

export default CustHistory