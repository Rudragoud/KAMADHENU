import React, { useEffect , useState } from 'react'
import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const PreviousD = ({navigation,route}) => {

  const usrID = route.params
  const [deliveredData,setDeliveredData]=useState([]);

  async function handleFetchDetails(){

    const res = await axios.get(`http://192.168.0.113:8000/newdeliverydetails/${usrID}`)
    console.log(res.data.details[0]);
    setDeliveredData(res.data.details)
  
  }


  useEffect(()=>{
    handleFetchDetails()
  },[])
 



  return (
    <View>
      

      <View>
        <Text style={styles.heading}> Delivered Data</Text>
      </View>

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Booth Name</DataTable.Title>
        <DataTable.Title>Delivery date</DataTable.Title>
        <DataTable.Title>Order ID</DataTable.Title>
       
      </DataTable.Header>
     
     

{deliveredData.map((data)=>{
        return  <DataTable.Row key={data.CO_ID}>
        <DataTable.Cell>{data.B_NAME}</DataTable.Cell>
        <DataTable.Cell>{new Date(data.CO_DELIVERYDATE).getDate()+"/"+(new Date(data.CO_DELIVERYDATE).getMonth()+1)+"/"+new Date(data.CO_DELIVERYDATE).getFullYear()}</DataTable.Cell>
        <DataTable.Cell>{data.CO_ID}</DataTable.Cell>
        
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
,
heading:{
  textAlign:'center',
  fontSize:25,
  fontWeight:'bold',
  marginBottom:20

},
  

})


export default PreviousD