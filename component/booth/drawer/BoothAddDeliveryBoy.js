import { View , Image , TextInput , Button, StyleSheet  ,Text, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const BoothAddDeliveryBoy = () => {

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
            <Text style={styles.heading}>Add Delivery Boy</Text>
        </View>

            <View>
            <Image source={require('../../../assets/img/delivery_boy.png')} style={styles.imgMain} />
            </View>

            <View style={styles.data}>
    <TextInput  value={delID} style={styles.input} onChangeText={setDelID} placeholder="D-Id" />
        <TextInput  value={delName}  style={styles.input} onChangeText={setDelName} placeholder="Name" />
        <TextInput  value={delPhNum}  style={styles.input} onChangeText={setDelPhNum} placeholder="Phone number" />
        <TextInput  value={delEmail}  style={styles.input} onChangeText={setDelEmail} placeholder="Email" />
        <TouchableOpacity style={styles.btn}>
            <Button title="Add" onPress={handleClick} />
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
    marginBottom:20
  
  },


})

export default BoothAddDeliveryBoy