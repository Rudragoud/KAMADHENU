import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView , Button} from 'react-native'
import React,{useState} from 'react'
import {  DataTable, TextInput } from 'react-native-paper';
import { useNavigation} from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

const CustCart = () => {

  const navigation =useNavigation()

  const [PName,setPName]=useState('')
  const [qty,setQty]=useState('')
  const [ttl,setTtl]=useState(0)
  const [boothName,setBoothName]=useState()
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [deliveryDate,setDeliveryDate]=useState('')
  const [items, setItems] = useState([])

  const cart=[
    {
      id:1,
      PName:"Blue milk",
      PPrice:"200",
      Quantity:20
    },
    
  ]



  const handleOrder=()=>{
    console.log("Order succesfull")
  }

  return (
    <View style={styles.container}>




    <View >
       <Text style={styles.heading}>  CART </Text>
    </View>

<View>
<TextInput style={styles.input} placeholder="Product name" value={PName} onChangeText={setPName}  />
<TextInput style={styles.input} placeholder="Quantity" value={qty} onChangeText={setQty}  />
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

     

      placeholder="Select product ID"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}
/>
</View>
<TextInput style={styles.input} placeholder="Booth name" value={boothName} onChangeText={setBoothName}  />
<TextInput style={styles.input} placeholder="Delivery Date" value={deliveryDate} onChangeText={setDeliveryDate}  />
</View>
      
<View>
  <Text style={styles.total}>Total  : {ttl} </Text> 
</View>
<View>

  <Button title="Order" onPress={handleOrder} />
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
  },
  input:{
    borderWidth:1,
marginBottom:10 ,
height:40,
textAlign:'center',
fontSize:19,
marginTop:30,
backgroundColor:"#fff",
fontWeight:'bold'
},
})

export default CustCart