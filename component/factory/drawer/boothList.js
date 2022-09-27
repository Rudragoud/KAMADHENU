import { View , Image ,StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
const BoothList = () => {

const navigation=useNavigation()



const booths = [
  {
  id: "1",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "2",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "3",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "4",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "5",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "6",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "7",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "8",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "9",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "10",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },

  {
  id: "11",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "12",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "13",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "14",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
  {
  id: "15",
  name: "Earnest Green",
  phone:8988989876,
  address:"kengeri",
  pincode:560060
  },
];

  return (

    <View>
      <View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("FDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.heading}>
          Booth List 
        </Text>
      </View>

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>Booth id</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Phone number</DataTable.Title>
        <DataTable.Title>Address</DataTable.Title>
        <DataTable.Title>Pincode</DataTable.Title>
      </DataTable.Header>
     
     

      {booths.map((booth)=>{
        return  <DataTable.Row key={booth.id}>
        <DataTable.Cell>{booth.id}</DataTable.Cell>
        <DataTable.Cell>{booth.name}</DataTable.Cell>
        <DataTable.Cell>{booth.phone}</DataTable.Cell>
        <DataTable.Cell>{booth.address}</DataTable.Cell>
        <DataTable.Cell>{booth.pincode}</DataTable.Cell>
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
    innerContainer:{
        padding:30
        
    },
    imgHome:{
        width:30,
        height:30,

    },
    tableHeader:{
      backgroundColor:'yellow'
    },
    heading:{
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginBottom:20
    
    },
  
    

})

export default BoothList