import React,{useEffect, useState} from 'react'
import { View, TextInput, Image, Button, StyleSheet, TouchableOpacity, ScrollView,Text } from 'react-native'
import axios from 'axios'
import DropDownPicker from 'react-native-dropdown-picker'




const BoothUpdateDeliveryBoy = ({navigation,route}) => {

    const usrID=route.params.usrID
    console.log(usrID)
    
    const [delID,setDelID]=useState('')
    const [delName,setDelName]=useState('')
    const [delPhNum,setDelPhNum]=useState('')
    const [delEmail,setDelEmail]=useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([])


    const fetchDeliveryBoys=async()=>{
        const res = await axios.get(`http://192.168.0.113:8000/deliveryboydetails/${usrID}`)
        res.data.deliveryboydetails.forEach((person)=>{
            items.push({label:person.DB_NAME,value:person.DB_NAME})
        })
    }


    useEffect(()=>{
        fetchDeliveryBoys()
    },[])


    const handleClick=async ()=>{

        const res =await axios.put(`http://192.168.0.113:8000/boothdeliveryboyupdate/${delName}/${delPhNum}/${delEmail}`)
        if(res.data=="success"){
            console.log("Delivery boy details updated!")
            setDelEmail("")
            setDelID("")
            setDelName("")
            setDelPass("")
            setDelPhNum("")
        }else{
            setDelEmail("")
            setDelID("")
            setDelName("")
            setDelPass("")
            setDelPhNum("")
        }
    }


    const handleChange=async(val)=>{
        const res = await axios.get(`http://192.168.0.113:8000/deliveryboy/${val} `)
        console.log(res.data.details[0])
        setDelName(res.data.details[0].DB_NAME)
        setDelEmail(res.data.details[0].DB_EMAIL)
        setDelPhNum(res.data.details[0].DB_PHNO.toString())
    }


    return (
        <View>
            <View style={styles.innerContainer}>
             
              

            </View>

            <View>
                <Text style={styles.heading} >Update Delivery Boy Details</Text>
            </View>
      
            <View>
            <Image source={require('../../../assets/img/user.png')} style={styles.imgMain} />
            </View>


            <View style={styles.data}>
          

        <View style={styles.DropDownArea}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      
      style={{
        backgroundColor:'cornflowerblue',
        borderWidth:0,
      }}

      textStyle={{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
      }}

     onChangeValue={(val)=>handleChange(val)}
     

      placeholder="Select Delivery Boy"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}
/>

</View>
    <Text style={styles.lbl}>Name</Text>
        <TextInput  value={delName}  style={styles.input}  />
        <Text style={styles.lbl}>Phone number</Text>
        <TextInput  value={delPhNum}  style={styles.input} onChangeText={(val)=>setDelPhNum(val)} />
        <Text style={styles.lbl}>Email</Text>
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
      },
      DropDownArea:{
        width:300,
        marginBottom:20
      }



})


export default BoothUpdateDeliveryBoy