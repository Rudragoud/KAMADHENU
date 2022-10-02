import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView,TextInput ,Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';





const CustProducts = ({navigation,route}) => {
    const [qty,setQty]=useState(0)
    const [price,setPrice]=useState('')
    const [ttl,setTtl]=useState(0)
    const usrID=route.params
    const [count,setCount]=useState('')
   
    const [open, setOpen] = useState(false);
    const [boothOpen,setBoothOpen]=useState(false)
    
  const [value, setValue] = useState(null);
  const[boothValue,setBoothValue]=useState(null)
  const [boothID,setBoothID]=useState('');
 
  const [items, setItems] = useState([])
  const [boothItems,setBoothItems]=useState([])

  const [product,setProduct]=useState('')
 
    

  async function fetchAllProducs(){
    const res = await axios.get('http://192.168.0.113:8000/custproductname')
    res.data.products.forEach((product)=>{
        items.push({label: product.P_NAME, value: product.P_NAME})
    })

    const response2= await axios.get('http://192.168.0.113:8000/boothdet')
   response2.data.boothdetails.forEach((booth)=>{
    boothItems.push({label:booth.B_NAME,value:booth.B_NAME})
   })

  

  }

  async function handleChange(val){

    const res=await axios.get(`http://192.168.0.113:8000/custproducts/${val}`)
    setPrice(res.data.productdetails[0].P_PRICE)
    setProduct(val)
    
  }


 

 async function handleClick(){
   if(count==0){
    alert("Please confirm your order first")
   }else{
   const res = await axios.get(`http://192.168.0.113:8000/orderfinal/${usrID}/${product}/${boothID}/${qty}/${price}`)
    if(res.data=="success"){
      alert("Order confirmed!!")
      setBoothID("")
      setProduct("")
      setQty("")
      setPrice("")
      setTtl("")
    }else{
      alert("Something went wrong!!")
      setBoothID("")
      setProduct("")
      setQty("")
      setPrice("")
    setTtl("")
    }
   }
  }

  function handleConfirm(){
    setTtl((price)*parseInt(qty));
    setCount(1)
  }



  useEffect(()=>{
   
    fetchAllProducs()
  },[])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Order products</Text>
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


<View style={styles.DropDownArea}>
      <DropDownPicker
      open={boothOpen}
      value={boothValue}
      items={boothItems}
      setOpen={setBoothOpen}
      setValue={setBoothValue}
      setItems={setBoothItems}
      
      style={{
        backgroundColor:'cornflowerblue',
        borderWidth:0,
      }}

      textStyle={{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
      }}

     onChangeValue={(val)=>setBoothID(val)}
     

      placeholder="Select booth"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}
/>


</View>


<TextInput placeholder='Quantity' style={styles.input} value={qty} onChangeText={(val)=>setQty(val)} />

<Text style={styles.txt}>Price : {price}</Text>
<Text style={styles.txt}>Total amount : {ttl}</Text>
<TouchableOpacity style={styles.btn}>
<Button title="Confirm" onPress={handleConfirm}  />
</TouchableOpacity>
<TouchableOpacity  style={styles.btn}>
<Button title="Order" onPress={handleClick} />
</TouchableOpacity>


    


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
   } , 

   btn:{
    marginBottom:50
   }






  
   




})

export default CustProducts