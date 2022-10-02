import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView , TextInput} from 'react-native'
import React,{useState} from 'react'
import { useNavigation} from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

const BoothNewOrders = () => {

const navigation=useNavigation()

const [custID,setCustID]=useState('')
const [delID,setDelID]=useState('')
const [custName,setCustName]=useState('')
const [productID,setProductID]=useState('')
const [productName,setProductName]=useState('')
const [price,setPrice]=useState('')

const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '001', value: '001'},
    {label: '002', value: '002'},
    
  ]);

  const [delBoy, setDelBoy] = useState([
    {label: '001', value: '001'},
    {label: '002', value: '002'},
    
  ]);



  const handleAssign=()=>{
    console.log(value,delID)
  }

  return (
    <View>
    <View style={styles.innerContainer}>
     <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("BDashboard")}>
     <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
     </TouchableOpacity>
    </View>



    <View>
      <Text style={styles.heading}>New Orders</Text>
    </View>
      
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

     

      placeholder="Select Order ID"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}

    />

    

    <View style={styles.dataContainer}>
      <Text style={styles.data}> Customer ID : {custID} </Text>
      <Text style={styles.data}> Customer Name : {custName} </Text>
      <Text style={styles.data}> Product ID : {productID} </Text>
      <Text style={styles.data}> Product Name  : {productName} </Text>
      <Text style={styles.data}> Price  : {price} </Text>




      <DropDownPicker
      open={open}
      value={delID}
      items={items}
      setOpen={setOpen}
      setValue={setDelID}
      setItems={setItems}
      
      style={{
        backgroundColor:'cornflowerblue',
        borderWidth:0,
        marginTop:20
      }}

      textStyle={{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
      }}

      placeholder="Delivery Boy ID"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}

    />



      <TouchableOpacity style={styles.btn}>
      <Button title="Assign Order"  onPress={handleAssign}/>
      </TouchableOpacity>
     
    </View>




    </View>



</View>
  )
}


const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'flex-start',
     
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
  fontWeight:'bold'

},

DropDownArea:{
margin:50
},

dropDown:{
  width:250,
  },


inputContainer:{
},

input: {
height: 20,
margin: 12,
borderWidth: 1,
padding: 10,
marginTop:10,
backgroundColor:'#fff'
},

btn:{

marginTop:20
},

dataContainer:{
 marginTop:20
},

data:{
fontSize:20,
marginTop:20
}

})

export default BoothNewOrders