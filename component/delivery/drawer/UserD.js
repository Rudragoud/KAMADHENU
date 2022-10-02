import React,{useState , useEffect} from 'react'
import { View, TextInput, Image, Button, StyleSheet, TouchableOpacity, Text , ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const UserD = ({navigation, route}) => {

    const usrID = route.params
    
    const [delID,setDelID]=useState('')
    const [delName,setDelName]=useState('')
    const [delPhNum,setDelPhNum]=useState('')
    const [delEmail,setDelEmail]=useState('')


    async function fetchDeliveryBoyDetails(){
        const res = await axios.get(`http://192.168.0.113:8000/deliveryboylist/${usrID}`)
        
        setDelName(res.data.details[0].DB_NAME)
        setDelPhNum(res.data.details[0].DB_PHNO.toString())
        setDelEmail(res.data.details[0].DB_EMAIL)
    }

     useEffect(()=>{
        fetchDeliveryBoyDetails()
        setDelID(usrID)
    },[])


const handleClick=async()=>{

    const res = await axios.get(`http://192.168.0.113:8000/delboydetailsupdate/${usrID}/${delName}/${delPhNum}/${delEmail}`)
    if(res.data=="success"){
        fetchDeliveryBoyDetails()
        alert("Updated")
    }else{
        alert("Error occured!!")
    }

}


    return (
        <View>
           

            <View>
                <Text style={styles.heading}>User Details</Text>
            </View>

            <View>
            <Image source={require('../../../assets/img/user.png')} style={styles.imgMain}  />
            </View>

            <View style={styles.data}>
                <Text>Delivery ID</Text>
    <TextInput  value={delID} style={styles.input} editable={false} />
    <Text>Delivery Name</Text>
        <TextInput  value={delName}  style={styles.input} onChangeText={(val)=>setDelName(val)} />
        <Text>Phone number</Text>
        <TextInput  value={delPhNum}  style={styles.input} onChangeText={(val)=>setDelPhNum(val)} />
        <Text>Delivery Email</Text>
        <TextInput  value={delEmail}  style={styles.input} onChangeText={(val)=>setDelEmail(val)} />
        <TouchableOpacity style={styles.btn}>
            <Button title="Update" onPress={handleClick} />
        </TouchableOpacity>
    </View>   


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor:'red',
        
    },
    innerContainer: {
        padding: 30

    },
    imgHome: {
        width: 30,
        height: 30,

    },

    imgMain:{
        width:200,
        height:200,
        marginLeft:80,
        marginBottom:20
    },
   
    data:{
        
        marginLeft:30
    },
     input:{
         backgroundColor:'#fff',
         borderWidth:1,
         marginBottom:20,
         width:300,
         height:30,
         textAlign:'center'
     },

     btn:{
        width:300,
        marginLeft:0
    },
    heading:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20,
      marginTop:100
      },



})


export default UserD