import React,{useState,useEffect} from 'react'
import { View, Text , Image ,Button,StyleSheet,TouchableOpacity} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import axios from 'axios'

const NewDeliveries = ({navigation,route}) => {

    const usrID = route.params

    const [OrderID,setOrderID]=useState('')
    const [BoothID,setBoothID]=useState('')
    const [custAddr,setCustAddr]=useState('')
   

    async function handleFetch(){
        const res = await axios.get(`http://192.168.0.113:8000/assignnewdelivery/${usrID}`)
        setOrderID(res.data.details[0].CO_ID)
        setBoothID(res.data.details[0].B_NAME)
        setCustAddr(res.data.details[0].C_ADDRESS)
    }

    useEffect(()=>{
        handleFetch()
    },[])


    const handleClick=async()=>{
        const res = await axios.get(`http://192.168.0.113:8000/updatedeliverystatus/${OrderID}`)
        if(res.data=="success"){
            alert("Delivery confirmed")
        }else{
            alert("Error occured")
        }
    }

  return (
    <View style={styles.container}>

   

<View style={styles.containerImgMain}>
    <Image source={require('../../../assets/img/delivery_boy.png')} style={styles.imgMain}/>
</View>

<View>
    <Text style={styles.heading}>Newly assigned deliveries</Text>
</View>


    <View style={styles.data}>
        <Text>BOOTH ID</Text>
    <TextInput disabled value={BoothID} style={styles.input} />
    <Text>ORDER ID</Text>
        <TextInput disabled value={OrderID}  style={styles.input} />
        <Text>CUSTOMER ADDRESS</Text>
        <TextInput disabled value={custAddr}  style={styles.input} />
        <TouchableOpacity style={styles.btn}>
            <Button title="Confirm" onPress={handleClick} />
        </TouchableOpacity>
    </View>


    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    innerContainer:{
        padding:30
        
    },
   
    heading:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
        marginBottom:20
    },
   
    input:{
        backgroundColor:'#fff',
        borderWidth:1,
        marginBottom:20,
        width:300,
        height:30,
        textAlign:'center'
    },
  
    imgMain:{
        width:150,
        height:150,
        marginTop:100
    },

    btn:{
        width:100,
        marginLeft:100
    }
  
    
  
  })


export default NewDeliveries