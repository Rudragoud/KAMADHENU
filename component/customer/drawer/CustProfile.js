import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const CustProfile = () => {

  const handleUpdate = () => {
    console.log("Updated")
  }

  const [custName, setCustName] = useState('')
  const [cPhNum, setPhNum] = useState('')
  const [email, setEmail] = useState('')
  const [addr, setAddr] = useState('')
  const [pinCode, setPinCode] = useState('')

  const navigation = useNavigation()
  return (
    <View style={styles.container}>


      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate("CDashboard")}>
          <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
        </TouchableOpacity>
      </View>

      <View >
        <Text style={styles.heading}> Update Profile</Text>
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
          <Button title="Update" onPress={handleUpdate} />
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

export default CustProfile