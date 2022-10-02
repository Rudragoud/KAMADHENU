import { View, Text,StyleSheet,Image,Button,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Booth = () => {

  const navigation=useNavigation()

  const [boothName,setBoothName]=useState('');
  const [password,setPassword]=useState('');


  async function handleClick(){


    if(boothName=="" || password==""){
     alert("Please enter both username and password")
     setBoothName('')
     setPassword('')
    
    }else{
   const res = await axios.get(`http://192.168.0.113:8000/boothlogin/${boothName}/${password}`)
   
     if(res.data!="Fail"){
       navigation.navigate("BDashboard",{usrID:res.data[0].id})  
       setBoothName('')
       setPassword('')
     }else{
       alert("Invalid credentials!")
     }
     
    }

    
 }


  return (
    <View>
      <Text style={styles.heading}>Booth Login</Text>
      <Image source={require('../../assets/img/shop.png')} style={styles.Img}/>
      <View >
        <TextInput value={boothName} style={styles.input} placeholder="Enter Booth Name" onChangeText={e=>setBoothName(e)} />
        <TextInput value={password}  style={styles.input} placeholder="Enter Password" onChangeText={e=>setPassword(e)} />
       <TouchableOpacity style={styles.btn} >
       <Button title="Login" onPress={()=>handleClick("BDashboard")} />
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

export default Booth