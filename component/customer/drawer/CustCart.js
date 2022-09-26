import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView , Button} from 'react-native'
import React,{useState} from 'react'
import {  DataTable } from 'react-native-paper';
import { useNavigation} from '@react-navigation/native'

const CustCart = () => {

  const navigation =useNavigation()

  const [PName,setPName]=useState('')
  const[PPrice,setPPrice]=useState('')
  const [qty,setQty]=useState('')
  const [ttl,setTtl]=useState(0)

  const cart=[
    {
      id:1,
      PName:"Blue milk",
      PPrice:"200",
      Quantity:20
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
       <Text style={styles.heading}>  CART </Text>
    </View>

      

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>Product Name</DataTable.Title>
        <DataTable.Title>Product Price</DataTable.Title>
        <DataTable.Title>Quantity</DataTable.Title>
      </DataTable.Header>
     
      {cart.map((product)=>{
        return  <DataTable.Row key={product.id}>
        <DataTable.Cell>{product.PName}</DataTable.Cell>
        <DataTable.Cell>{product.PPrice}</DataTable.Cell>
        <DataTable.Cell>{product.Quantity}</DataTable.Cell>
      </DataTable.Row>
      })}
     
     
     

   
      
    </DataTable>
    </ScrollView>

<View>
  <Text style={styles.total}>Total  : {ttl} </Text> 
</View>
<View>

  <Button title="checkout"  />
</View>

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
  },
  total:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    marginTop:20,
    marginBottom:20
  }
})

export default CustCart