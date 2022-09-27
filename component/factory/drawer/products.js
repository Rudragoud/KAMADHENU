import { View, Text , Image ,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
const Products = () => {

const navigation=useNavigation()



const booths = [
  {
  id: "1",
  name: "Earnest Green",
  price:444,
  plantID:"kengeri",
  
  },
  {
  id: "2",
  name: "Earnest Green",
  price:444,
  plantID:"kengeri",
  },
  {
  id: "3",
  name: "Earnest Green",
  price:234,
  plantID:"kengeri",
  },
  {
  id: "4",
  name: "Earnest Green",
  price:667,
  plantID:"kengeri",
  },
  {
  id: "5",
  name: "Earnest Green",
  price:898,
  plantID:"kengeri",
  },
  {
  id: "6",
  name: "Earnest Green",
  price:898,
  plantID:"kengeri",
  },
  {
  id: "7",
  name: "Earnest Green",
  price:100,
  plantID:"kengeri",
  },
  {
  id: "8",
  name: "Earnest Green",
  price:200,
  plantID:"kengeri",
  },
  {
  id: "9",
  name: "Earnest Green",
  price:122,
  plantID:"kengeri",
  },
  {
  id: "10",
  name: "Earnest Green",
  price:345,
  plantID:"kengeri",
  },

  {
  id: "11",
  name: "Earnest Green",
  price:432,
  plantID:"kengeri",
  },
  {
  id: "12",
  name: "Earnest Green",
  price:453,
  plantID:"kengeri",
  },
  {
  id: "13",
  name: "Earnest Green",
  price:543,
  plantID:"kengeri",
  },
  {
  id: "14",
  name: "Earnest Green",
  price:543,
  plantID:"kengeri",
  },
  {
  id: "15",
  name: "Earnest Green",
  price:455,
  plantID:"kengeri",
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
        <Text style={styles.heading}>Product List</Text>
      </View>

      <ScrollView>
      <DataTable >
      <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>Booth id</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        <DataTable.Title>Plant ID</DataTable.Title>
       
      </DataTable.Header>
     
   

      {booths.map((booth)=>{
        return  <DataTable.Row key={booth.id}>
        <DataTable.Cell>{booth.id}</DataTable.Cell>
        <DataTable.Cell>{booth.name}</DataTable.Cell>
        <DataTable.Cell>{booth.price}</DataTable.Cell>
        <DataTable.Cell>{booth.plantID}</DataTable.Cell>
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
    }
  ,
  heading:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    marginBottom:20
  
  },
    

})

export default Products