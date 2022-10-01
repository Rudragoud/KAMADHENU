import { View, Text,StyleSheet,Image,Button,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const Customer = () => {

  const navigation=useNavigation()

  const [phn,setPhn]=useState('');
  const [password,setPassword]=useState('');
 

  async function handleClick(){


     if(phn=="" || password==""){
      alert("Please enter both username and password")
      setPhn('')
      setPassword('')
     
     }else{
    const res = await axios.get(`http://192.168.29.227:8000/custlogin/${phn}/${password}`)
    
      if(res.data!="Fail"){
        navigation.navigate("CDashboard",{usrID:res.data[0].id})  
        setPhn('')
        setPassword('')
      }else{
        alert("Invalid credentials!")
      }
      
     }

     
  }

  return (
    <View>
      <Text style={styles.heading}>Customer Login</Text>
      <Image source={require('../../assets/img/customer.png')} style={styles.Img}/>
      <View >
        <TextInput value={phn} style={styles.input} placeholder="Enter Phone number" onChangeText={(e)=>setPhn(e)} />
        <TextInput value={password}  style={styles.input} placeholder="Enter Password" onChangeText={(e)=>setPassword(e)} />

      

       <TouchableOpacity style={styles.btn} >
       <Button title="Login" onPress={handleClick} />
       </TouchableOpacity>
      
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    alignItems:'center'
  },
Img:{
  marginTop:50,
width:200,
height:200,
marginLeft:80
},
 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop:20
  },
  heading:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    marginTop:20
  },
  btn:{
    width:100,
    marginLeft:120
  },
})

export default Customer