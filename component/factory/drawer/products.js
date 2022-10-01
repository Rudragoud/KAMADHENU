import { View, Text , Image ,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React, { useState,useEffect } from 'react'
import { DataTable } from 'react-native-paper';
import axios from 'axios';
const Products = ({navigation,route}) => {

  const plantName = route.params

  console.log(plantName)

  const [prods,setprods]=useState([])
  
  async function fetchAllProducts(){
    const res = await axios.get(`http://192.168.29.227:8000/factprodlist/${plantName}`)
    
    setprods(res.data.prodlist)
  }

  useEffect(()=>{
    fetchAllProducts()
  },[])



  return (

    <View>
     

      <View>
        <Text style={styles.heading}>Product List</Text>
      </View>

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Product Name</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        <DataTable.Title>Plant Name</DataTable.Title>
       
      </DataTable.Header>
     
   

      {prods.map((prod)=>{
        return  <DataTable.Row key={prod.P_NAME}>
        <DataTable.Cell>{prod.P_NAME}</DataTable.Cell>
        <DataTable.Cell>{prod.P_PRICE}</DataTable.Cell>
        <DataTable.Cell>{prod.PLANT_NAME}</DataTable.Cell>
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

export default Products