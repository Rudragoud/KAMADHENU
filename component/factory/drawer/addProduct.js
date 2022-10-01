import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'
const AddProduct = ({navigation,route}) => {

  const plantName=route.params
  console.log(plantName)
    
    const [PName,setPName]=useState('')
    const [PPrice,setPPrice]=useState('')
    


      async function handleSave(){
        const res = await axios.get(`http://192.168.29.227:8000/factaddproduct/${PName}/${PPrice}/${plantName}`)
        if(res.data=="success"){
          alert("Product was succesfully inserted!!")
        }else{
          alert("Unknown error occured!!")
        }
      }

  return (
    <View style={styles.container}>
     
      

      <Text style={styles.heading}>ADD PRODUCT</Text>
      <Image source={require('../../../assets/img/addProduct.png')} style={styles.imgFrame} />
      <View style={styles.containerInput}>
     
      <TextInput style={styles.input} placeholder="Product Name" value={PName} onChangeText={setPName}  />
      <TextInput style={styles.input} placeholder="Product Price" value={PPrice} onChangeText={setPPrice}  />
  
      <TouchableOpacity style={styles.btn} >
        <Button title="Save" color="cornflowerblue" onPress={()=>handleSave()}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    innerContainer:{
        padding:30
        
    },
    imgHome:{
        width:30,
        height:30,
    },
    imgFrame:{
      width:150,
      height:150,
      marginTop:20,
      marginLeft:100
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginTop:20
    },
    btn:{
      width:90,
      marginLeft:125,
      marginTop:20
    },
    heading:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:30,
      marginTop:60
    }
   

  
  
    

})

export default AddProduct