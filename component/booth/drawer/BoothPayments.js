import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView , TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation} from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const BoothPayments = ({navigation,route}) => {


  const usrID=route.params.usrID

  

const [custID,setCustID]=useState('')
const [custName,setCustName]=useState('')
const [orderCount,setOrderCount]=useState('')
const [totalPaymment,setTotalPayment]=useState('')

const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

   async function handleChange(val){
    setCustID(val)
    const res = await axios.get(`http://192.168.0.113:8000/boothcustpayments/${val}`)
    setCustName(res.data.Boothcustpay[0].C_NAME)
    setOrderCount(res.data.Boothcustpay[0].ORDERCOUNT)
    setTotalPayment(res.data.Boothcustpay[0].TOTAL)
   
  }

  async function handleFetch(){
    const res = await axios.get(`http://192.168.0.113:8000/boothcustid/${usrID}`)
    
    res.data.custid.forEach((id)=>{
      items.push({label:id.C_ID,value:id.C_ID})
    })
    console.log(res.data)
  }


    useEffect(()=>{
      handleFetch()
    },[])

  return (
    <View>
   



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

     
      onChangeValue={(val)=>handleChange(val)}

      placeholder="Select Customer ID "
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
  fontWeight:'bold',
  marginTop:90
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