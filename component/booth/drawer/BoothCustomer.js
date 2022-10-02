import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


const BoothCustomer = ({navigation,route}) => {

  const usrID = route.params

  const handleSave =  async () => {
    const res = await axios.get(`http://192.168.0.113:8000/boothcustomeradd/${custName}/${cPhNum}/${email}/${addr}/${pinCode}`)
    if(res.data=="success"){
      alert("Customer data saved!!")
      setCustName("")
      setPhNum("")
      setEmail("")
      setAddr("")
      setPinCode("")
    }
    else{
    alert("Error occured!!")
    setCustName("")
    setPhNum("")
    setEmail("")
    setAddr("")
    setPinCode("")
    }
  }

  const [custName, setCustName] = useState('')
  const [cPhNum, setPhNum] = useState('')
  const [email, setEmail] = useState('')
  const [addr, setAddr] = useState('')
  const [pinCode, setPinCode] = useState('')

  
  return (
    <View style={styles.container}>


      

      <View >
        <Text style={styles.heading}> Add a customer</Text>
      </View>

      <View style={styles.containerImgMain}>
        <Image source={require('../../../assets/img/user.png')} style={styles.imgMain} />
      </View>

      <View>
        <TextInput placeholder='Customer name' value={custName} onChangeText={setCustName} style={styles.input} />
        <TextInput placeholder='Phone number' value={cPhNum} onChangeText={setPhNum} style={styles.input} />
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}  style={styles.input} />
        <TextInput placeholder='Address' value={addr} onChangeText={setAddr} style={styles.input} />
        <TextInput placeholder='Pin code' value={pinCode} onChangeText={setPinCode} style={styles.input} />
        <TouchableOpacity>
          <Button title="Save" onPress={handleSave} />
        </TouchableOpacity>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  imgHome: {
    width: 30,
    height: 30,

  },
  imgMain: {
    width: 150,
    height: 150,
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  containerImgMain: {
    marginLeft: 80,
    marginTop: 20,
    marginBottom: 40
  },
  input:{
   borderWidth:1,
   marginBottom:10 ,
   height:40,
   textAlign:'center'
  }
})

export default BoothCustomer