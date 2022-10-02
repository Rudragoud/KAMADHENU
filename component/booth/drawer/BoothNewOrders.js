import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const BoothNewOrders = ({navigation,route}) => {

  const usrID=route.params.usrID

  const [custID, setCustID] = useState('')
  const [delID, setDelID] = useState('')
  const [custName, setCustName] = useState('')
  const [qty, setQty] = useState('')
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')

  const [open, setOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [delValue, setDelValue] = useState(null);
  const[delBoyID,setDelBoyID]=useState('')
  const [items, setItems] = useState([]);
  const [orderID,setOrderID]=useState('')

  const [delBoy, setDelBoy] = useState([]);

  const handleChange=async(val)=>{
    setOrderID(val)
   const res = await axios.get(`http://192.168.0.113:8000/custordertobooth/${val}/${usrID}`)
   console.log(res.data.details)
   setCustID(res.data.details[0].C_ID)
   setCustName(res.data.details[0].C_NAME)
   setQty(res.data.details[0].P_QUANTITY)
   setProductName(res.data.details[0].P_NAME)
   setPrice(res.data.details[0].PRICE)

  }

  const fetchAllData= async ()=>{
    const res = await axios.get(`http://192.168.0.113:8000/deliveryboydetails/${usrID}`)
    res.data.deliveryboydetails.forEach((person)=>{
        delBoy.push({label:person.DB_NAME,value:person.DB_NAME})
    })


    const response2 = await axios.get(`http://192.168.0.113:8000/orderidlist/${usrID}`)
   response2.data.orderids.forEach((order)=>{
    items.push({label:order.CO_ID,value:order.CO_ID})
   })


  }

 


  useEffect(() => {
    fetchAllData()
  }, [])



  const handleAssign = async() => {
    
    const res = await axios.get(`http://192.168.0.113:8000/assignorder/${usrID}/${orderID}/${delBoyID}`)
    if(res.data=="success"){
      alert("Delivery assigned")
    }else{
      alert("Error occured")
    }
  
  }

  return (
    <View>
     



      <View>
        <Text style={styles.heading}>New Orders</Text>
      </View>

      <View style={styles.DropDownArea}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(val)=>handleChange(val)}
          style={{
            backgroundColor: 'cornflowerblue',
            borderWidth: 0,
          }}

          textStyle={{
            color: '#fff',
            fontSize: 17,
            fontWeight: 'bold'
          }}



          placeholder="Select Order ID"
          dropDownContainerStyle={{
            backgroundColor: "cornflowerblue",
            borderWidth: 0,
          }}

        />



        <View style={styles.dataContainer}>
          <Text style={styles.data}> Customer ID : {custID} </Text>
          <Text style={styles.data}> Customer Name : {custName} </Text>
          <Text style={styles.data}> Quantity : {qty} </Text>
          <Text style={styles.data}> Product Name  : {productName} </Text>
          <Text style={styles.data}> Price  : {price} </Text>




          <DropDownPicker
           open={delOpen}
           value={delValue}
           items={delBoy}
           setOpen={setDelOpen}
           setValue={setDelValue}
           setItems={setDelBoy}
           
            style={{
              backgroundColor: 'cornflowerblue',
              borderWidth: 0,
              marginTop: 20
            }}

              onChangeValue={(val)=>setDelBoyID(val)}
            textStyle={{
              color: '#fff',
              fontSize: 17,
              fontWeight: 'bold'
            }}

            placeholder="Delivery Boy ID"
            dropDownContainerStyle={{
              backgroundColor: "cornflowerblue",
              borderWidth: 0,
            }}

          />



          <TouchableOpacity style={styles.btn}>
            <Button title="Assign Order" onPress={handleAssign} />
          </TouchableOpacity>

        </View>




      </View>



    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  innerContainer: {
    padding: 30

  },
  imgHome: {
    width: 30,
    height: 30,

  },
  tableHeader: {
    backgroundColor: 'yellow'
  }
  ,
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'

  },

  DropDownArea: {
    margin: 50
  },

  dropDown: {
    width: 250,
  },


  inputContainer: {
  },

  input: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff'
  },

  btn: {

    marginTop: 20
  },

  dataContainer: {
    marginTop: 20
  },

  data: {
    fontSize: 20,
    marginTop: 20
  }

})

export default BoothNewOrders