import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView,TextInput ,Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { InteractionManager } from 'react-native';

const CustProducts = ({navigation,route}) => {
    const [qty,setQty]=useState(0)
    const [price,setPrice]=useState('')
    const [ttl,setTtl]=useState(0)
    const usrID=route.params
   
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([])

    

  async function fetchAllProducs(){
    const res = await axios.get('http://192.168.29.227:8000/custproductname')
    res.data.products.forEach((product)=>{
        items.push({label: product.P_NAME, value: product.P_NAME})
    })
  }

  async function handleChange(val){
    setTtl(0)
    const res=await axios.get(`http://192.168.29.227:8000/custproducts/${val}`)
    console.log(res.data.productdetails[0].P_PRICE)
    setPrice(res.data.productdetails[0].P_PRICE)
    setTtl((price)*parseInt(qty));
    
  }


  function handleQtyChange(val){
    setQty(val)
    setTtl((price)*parseInt(qty));
  }

  function handleClick(){
    console.log(qty)
  }




  useEffect(()=>{
   
    fetchAllProducs()
  },[])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Add products to cart</Text>
            </View>

        <View>

        <View style={styles.DropDownArea}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      
      style={{
        backgroundColor:'cornflowerblue',
        borderWidth:0,
      }}

      textStyle={{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
      }}

     onChangeValue={(val)=>handleChange(val)}
     

      placeholder="Select product ID"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}
/>

</View>
<TextInput style={styles.input} placeholder="Quantity" value={qty} onChangeText={(val)=>handleQtyChange(val)}  />
<Text style={styles.txt}>Price : {price}</Text>
<Text style={styles.txt}>Total amount : {ttl}</Text>
<Button title="Add to cart" onPress={handleClick} />


    


        </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    heading: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:80
    },

    tableHeader:{
        marginRight:30
    },
   
    pad:{
        marginRight:45,

    },

    input:{
        borderWidth:1,
   marginBottom:10 ,
   height:40,
   textAlign:'center',
   fontSize:19,
   marginTop:30,
   fontWeight:'bold'
    },


   DropDownArea:{
    marginTop:30
   }

   ,

   txt:{
    fontSize:24,
    textAlign:'center',
    marginTop:15,
    marginBottom:20,
    fontWeight:'bold'
   }






  
   




})

export default CustProducts