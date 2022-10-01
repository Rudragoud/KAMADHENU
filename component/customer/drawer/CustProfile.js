import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React, { useState ,useEffect} from 'react'
import axios from 'axios'


const CustProfile = ({navigation,route}) => {

  const usrID=route.params

 
  

  const [custName, setCustName] = useState('')
  const [cPhNum, setPhNum] = useState("")
  const [email, setEmail] = useState('')
  const [addr, setAddr] = useState('')
  const [pinCode, setPinCode] = useState('')





async function fetchCustomerDetails(){

  const res = await  axios.get(`http://192.168.29.227:8000/custprofile/${usrID}`)
  setCustName(res.data.custinfo.cname)
  setPhNum(res.data.custinfo.cphn)
 setAddr(res.data.custinfo.caddr)
 setEmail(res.data.custinfo.cemail)
 setPinCode(res.data.custinfo.cpincode)
 

}

useEffect(()=>{

 
fetchCustomerDetails()


},[])


const handleUpdate = async () => {
  const res =await axios.put(`http://192.168.29.227:8000/custprofileupdate/${custName}/${cPhNum}/${email}/${addr}/${pinCode}/${usrID}`)
  if(res.data=="done"){
    alert("Updated")
  }
}  

return (
    <View style={styles.container}>


 
      <View >
        <Text style={styles.heading}> Update Profile</Text>
      </View>

      <View style={styles.containerImgMain}>
        <Image source={require('../../../assets/img/user.png')} style={styles.imgMain} />
      </View>

      <View>
        <Text>Name </Text>
        <TextInput placeholder='Customer name' value={custName} onChangeText={setCustName} style={styles.input} />
        <Text>Phone number </Text>
        <TextInput placeholder='Phone number' value={cPhNum} onChangeText={setPhNum} style={styles.input} />
        <Text>Email </Text>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}  style={styles.input} />
        <Text>Address </Text>
        <TextInput placeholder='Address' value={addr} onChangeText={setAddr} style={styles.input} />
        <Text>Pin code </Text>
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

  },
  containerImgMain: {
    marginLeft: 80,
    
   
  },
  input:{
   borderWidth:1,
   marginBottom:10 ,
   height:40,
   textAlign:'center'
  }
})

export default CustProfile