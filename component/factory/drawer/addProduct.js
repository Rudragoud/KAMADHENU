import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import { useNavigation, useNavigationState } from '@react-navigation/native'
const AddProduct = () => {

    const navigation=useNavigation()

    const [PID,setPID]=useState('')
    const [PName,setPName]=useState('')
    const [PPrice,setPPrice]=useState('')
    const [FactoryID,setFactoryId]=useState('')


      function handleSave(){
        
      }

  return (
    <View style={styles.container}>
     
      <View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("FDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>

      <Text style={styles.heading}>ADD PRODUCT</Text>
      <Image source={require('../../../assets/img/addProduct.png')} style={styles.imgFrame} />
      <View style={styles.containerInput}>
      <TextInput style={styles.input} placeholder="Product ID" value={PID} onChangeText={setPID}  />
      <TextInput style={styles.input} placeholder="Product Name" value={PName} onChangeText={setPName}  />
      <TextInput style={styles.input} placeholder="Product Price" value={PPrice} onChangeText={setPPrice}  />
      <TextInput style={styles.input} placeholder="FactoryID" value={FactoryID} onChangeText={setFactoryId}  />
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
      fontSize:30
    }
   
  
  
    

})

export default AddProduct