import { View, Text,StyleSheet,Image,Button,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Factory = () => {

  const navigation=useNavigation()

  const [plantName,setplantName]=useState('');
  const [password,setPassword]=useState('');


  async function handleClick(){

    
    if(plantName=="" || password==""){
     alert("Please enter both username and password")
     setplantName('')
     setPassword('')
    
    }else{
   
      const res = await axios.get(`http://192.168.0.113:8000/factlogin/${plantName}/${password}`)
     if(res.data!="Fail"){
       navigation.navigate("FDashboard",plantName)  
       setplantName('')
       setPassword('')
     }else{
       alert("Invalid credentials!")
       setplantName('')
       setPassword('')
     }
     
    }

    
 }

  return (
    <View>
      <Text style={styles.heading}>Factory Login</Text>
      <Image source={require('../../assets/img/factory.png')} style={styles.Img}/>
      <View >
        <TextInput value={plantName} style={styles.input} placeholder="Enter Username" onChangeText={setplantName} />
        <TextInput value={password}  style={styles.input} placeholder="Enter Password" onChangeText={setPassword} />
       <TouchableOpacity style={styles.btn} >
       <Button title="Login" onPress={()=>handleClick()} />
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
    marginLeft:140
  },
})

export default Factory