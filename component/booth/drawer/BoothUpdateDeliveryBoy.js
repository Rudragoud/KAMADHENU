import React,{useState} from 'react'
import { View, TextInput, Image, Button, StyleSheet, TouchableOpacity, ScrollView,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'



const BoothUpdateDeliveryBoy = () => {

    const navigation = useNavigation()
    const [delID,setDelID]=useState('')
    const [delName,setDelName]=useState('')
    const [delPhNum,setDelPhNum]=useState('')
    const [delEmail,setDelEmail]=useState('')


const handleClick=()=>{
console.log('hello')
}


    return (
        <View>
            <View style={styles.innerContainer}>
             
                <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate("BDashboard")}>
                    <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
                </TouchableOpacity>
               

            </View>

            <View>
                <Text style={styles.heading} >Update Delivery Boy Details</Text>
            </View>
      
            <View>
            <Image source={require('../../../assets/img/user.png')} style={styles.imgMain} />
            </View>


            <View style={styles.data}>
            <Text style={styles.lbl}>ID</Text>
    <TextInput  value={delID} style={styles.input} />
    <Text style={styles.lbl}>Name</Text>
        <TextInput  value={delName}  style={styles.input}  />
        <Text style={styles.lbl}>Phone number</Text>
        <TextInput  value={delPhNum}  style={styles.input} />
        <Text style={styles.lbl}>Email</Text>
        <TextInput  value={delEmail}  style={styles.input} />
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



})


export default BoothUpdateDeliveryBoy