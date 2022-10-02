import React,{useState,useEffect} from 'react'
import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
import axios from 'axios';


const BoothDeliveries = ({navigation,route}) => {

  const usrID = route.params.usrID
  console.log(usrID)

  const [deliveredData,setDeliveryData]=useState([]);


  useEffect(()=>{
    handleFetch()
  },[])

  const handleFetch=async()=>{
    const res = await axios.get(`http://192.168.0.113:8000/custboothdeliverydetails/${usrID}`)
    setDeliveryData(res.data.details)
    
  }
 


  return (
    <View>
    

      <View>
      <Text style={styles.heading}>All deliveries</Text>
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
     
     

{deliveredData.map((deliver)=>{
        return  <DataTable.Row key={deliver.CO_ID}>
        <DataTable.Cell>{deliver.P_NAME}</DataTable.Cell>
        <DataTable.Cell>{deliver.C_ID}</DataTable.Cell>
        <DataTable.Cell>{deliver.CO_ID}</DataTable.Cell>
        <DataTable.Cell>{deliver.CO_DELIVERYDATE}</DataTable.Cell>
        <DataTable.Cell>{deliver.PRICE}</DataTable.Cell>
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
    marginBottom:20,
    marginTop:80
  
  },

  

})


export default BoothDeliveries