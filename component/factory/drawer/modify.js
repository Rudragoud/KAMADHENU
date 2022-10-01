import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React,{useEffect, useState} from 'react'

import { TextInput } from 'react-native-paper';
import axios from 'axios';

const Modify = ({navigation,route}) => {

  const plantName = route.params

  const [BoothName,setBoothName]=useState('')
const [phn,setPhn]=useState('')
const [email,setEmail]=useState('')
const [addr,setAddr]=useState('')
const [pin,setPin]=useState('')
const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);




  async function fetchBoothList(){
    const res = await axios.get('http://192.168.29.227:8000/factoryboothname/')
    res.data.data.forEach((booth)=>{
      items.push({label:booth.B_NAME,value:booth.B_NAME})
    })
  }

  useEffect(()=>{

    fetchBoothList()

  },[])





  const handleUpdate=()=>{
    
  }

  const handleDelete=()=>{

  }

  return (

    <View>
      

      

    <View>
      <Text style={styles.heading}>Modify Booth Data</Text>
    </View>
      
    <View style={styles.DropDownArea}>
     
      </View>
    
      <View style={styles.inputContainer}>
        <TextInput placeholder='Booth Name' style={styles.input} value={BoothName} onChangeText={setBoothName}  />
        <TextInput placeholder='Phone number' style={styles.input} value={phn} onChangeText={setPhn}  />
        <TextInput placeholder='Email ID' style={styles.input} value={email} onChangeText={setEmail}  />
        <TextInput placeholder='Address' style={styles.input} value={addr} onChangeText={setAddr}  />
        <TextInput placeholder='Pin code' style={styles.input} value={pin} onChangeText={setPin}  />
        <TouchableOpacity style={styles.btn}>
          <Button title="Update" onPress={handleUpdate} style={styles.btnButton} />
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Button title="Delete" onPress={handleDelete} style={styles.btnButton} />
        </TouchableOpacity>
      </View>




   </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
       
    },
    innerContainer:{
        padding:30
        
    },
    imgHome:{
        width:30,
        height:30,

    },
    tableHeader:{
      backgroundColor:'yellow'
    }
  ,
  heading:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold'

  },

DropDownArea:{
margin:50
  },

  dropDown:{
    width:250,
    },
  
  
inputContainer:{
},

input: {
  height: 20,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  marginTop:10,
  backgroundColor:'#fff'
},

btn:{
  width:200,
marginLeft:70,
marginBottom:20
},


})

export default Modify