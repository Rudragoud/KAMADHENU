import React,{useState} from 'react'
import { View, TextInput, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DataTable } from 'react-native-paper';

const UserD = () => {

    const navigation = useNavigation()
    const [delID,setDelID]=useState('Del ID : 001')
    const [delName,setDelName]=useState('Del Name : XYZ')
    const [delPhNum,setDelPhNum]=useState('Del Ph Num : 9009990987')
    const [delEmail,setDelEmail]=useState('Del Email : xyz@gmail.com')


const handleClick=()=>{
console.log('hello')
}


    return (
        <View>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate("DDashboard")}>
                    <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
                </TouchableOpacity>
            </View>

            <View>
            <Image source={require('../../../assets/img/user.png')} style={styles.imgMain} />
            </View>

            <View style={styles.data}>
    <TextInput disabled value={delID} style={styles.input} />
        <TextInput disabled value={delName}  style={styles.input} />
        <TextInput disabled value={delPhNum}  style={styles.input} />
        <TextInput disabled value={delEmail}  style={styles.input} />
        <TouchableOpacity style={styles.btn}>
            <Button title="Request data updation" onPress={handleClick} />
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
    }



})


export default UserD