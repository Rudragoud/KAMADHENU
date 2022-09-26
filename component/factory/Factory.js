import { View, Text,StyleSheet,Image,Button,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const Factory = () => {

  const navigation=useNavigation()

  const [username,setuserName]=useState('');
  const [password,setPassword]=useState('');


  function handleClick(val){
    navigation.navigate(val)
    console.log(val)
  }

  return (
    <View>
      <Text style={styles.heading}>Factory Login</Text>
      <Image source={require('../../assets/img/factory.png')} style={styles.Img}/>
      <View >
        <TextInput value={username} style={styles.input} placeholder="Enter Username" onChangeText={setuserName} />
        <TextInput value={password}  style={styles.input} placeholder="Enter Password" onChangeText={setPassword} />
       <TouchableOpacity style={styles.btn} >
       <Button title="Login" onPress={()=>handleClick("FDashboard")} />
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

export default Factory