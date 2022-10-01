import { View , Image ,StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DataTable } from 'react-native-paper';
const BoothList = ({navigation,route}) => {
const plantName = route.params
console.log(plantName)
const [booths,setBooths]=useState([])
const [bPhone,setBPhone]=useState('')
const  [bAddr,setBAddr]=useState('')
const [pin,setPin]=useState('')

const fetchAllBooths = async()=>{
  const res= await axios.get(`http://192.168.29.227:8000/factboothlist/${plantName}`)
setBooths(res.data.boothdetails)
}

useEffect(()=>{

fetchAllBooths()

},[])





  return (

    <View>
     

      <View>
        <Text style={styles.heading}>
          Booth List 
        </Text>
      </View>

      <ScrollView horizontal={true}>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.marg}>Booth name</DataTable.Title>
        <DataTable.Title style={styles.marg}>Phone number</DataTable.Title>
        <DataTable.Title style={styles.marg}>Address</DataTable.Title>
        <DataTable.Title style={styles.marg}>Pincode</DataTable.Title>
      </DataTable.Header>
     
     

      {booths.map((booth)=>{
        return  <DataTable.Row key={booth.B_NAME}>
        <DataTable.Cell style={styles.pad}>{booth.B_NAME}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{booth.B_PHNO}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{booth.B_ADDRESS}</DataTable.Cell>
        <DataTable.Cell style={styles.pad}>{booth.B_PINCODE}</DataTable.Cell>
      </DataTable.Row>
      })}
      
    </DataTable>
    </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start'
    },
    
    tableHeader:{
      backgroundColor:'yellow',
    },
    heading:{
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginBottom:20,
    marginTop:30
    },
    
   pad:{
    marginRight:35
   }
    

})

export default BoothList