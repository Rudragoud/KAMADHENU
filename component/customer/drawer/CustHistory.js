import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { DataTable } from 'react-native-paper';
import { useNavigation} from '@react-navigation/native'

const CustHistory = () => {

    const navigation=useNavigation()

    const orders=[
        {
            id:"001",
            BName:"Booth 1",
            CName:"Punith",
            PName:"Nandini Blue Milk",
            Price:"22"
               },
             
                                   
    ]


  return (
    <View style={styles.container}>


<View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("CDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>

    <View >
       <Text style={styles.heading}>  Previous Orders</Text>
    </View>

      

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>Booth name</DataTable.Title>
        <DataTable.Title>Customer name</DataTable.Title>
        <DataTable.Title>Product name</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
      </DataTable.Header>
     
      {orders.map((order)=>{
        return  <DataTable.Row key={order.id}>
        <DataTable.Cell>{order.BName}</DataTable.Cell>
        <DataTable.Cell>{order.CName}</DataTable.Cell>
        <DataTable.Cell>{order.PName}</DataTable.Cell>
        <DataTable.Cell>{order.Price}</DataTable.Cell>
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
        marginBottom:20
    }
})

export default CustHistory