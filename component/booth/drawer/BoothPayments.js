import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView , TextInput} from 'react-native'
import React,{useState} from 'react'
import { useNavigation} from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

const BoothPayments = () => {

const navigation=useNavigation()

const [custID,setCustID]=useState('')
const [custName,setCustName]=useState('')
const [orderCount,setOrderCount]=useState('')
const [totalPaymment,setTotalPayment]=useState('')

const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '001', value: '001'},
    {label: '002', value: '002'},
    
  ]);

  return (
    <View>
    <View style={styles.innerContainer}>
     <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("BDashboard")}>
     <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
     </TouchableOpacity>
    </View>



    <View>
      <Text style={styles.heading}>Customer wise - Payment data</Text>
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

     

      placeholder="Select product ID"
      dropDownContainerStyle={{
        backgroundColor: "cornflowerblue",
        borderWidth:0,
      }}

    />

    <View style={styles.dataContainer}>
      <Text style={styles.data}> Customer ID : {custID} </Text>
      <Text style={styles.data}> Customer Name : {custName} </Text>
      <Text style={styles.data}> No. of Orders : {orderCount} </Text>
      <Text style={styles.data}> Total Payment  : {totalPaymment} </Text>
     
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
width:200,
marginLeft:70,
marginBottom:20
},

dataContainer:{
 marginTop:40
},

data:{
fontSize:20,
marginTop:20
}

})

export default BoothPayments