import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { useNavigation} from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-paper';

const Modify = () => {

const navigation=useNavigation()

const [PID,setPID]=useState('')
const [PName,setPName]=useState('')
const [PPrice,setPPrice]=useState('')
const [PlantID,setPlantID]=useState('')

const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Mango', value: 'Mango'},
    {label: 'Ananas', value: 'Ananas'},
    {label: 'Peach', value: 'Peach'},
    {label: 'Kashmir apple', value: 'Kashmir'},
    {label: 'Hyderabad biryani', value: 'Hyderabad'},
    {label: 'Haha', value: 'Haha'},
    {label: 'Huehuehue', value: 'Huehuehue'},
    {label: 'jAJAJA', value: 'jAJAJA'},
    {label: 'IDLy', value: 'IDLy'},
    {label: 'Dosa', value: 'Dosa'},
  ]);


  const handleUpdate=()=>{
    
  }

  const handleDelete=()=>{

  }

  return (

    <View>
      <View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("FDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>

      

    <View>
      <Text style={styles.heading}>Modify Booth Data</Text>
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
      </View>
    
      <View style={styles.inputContainer}>
        <TextInput placeholder='Product ID' style={styles.input} value={PID} onChangeText={setPID}  />
        <TextInput placeholder='Product Name' style={styles.input} value={PName} onChangeText={setPName}  />
        <TextInput placeholder='Product Price' style={styles.input} value={PPrice} onChangeText={setPPrice}  />
        <TextInput placeholder='Product Plant ID' style={styles.input} value={PlantID} onChangeText={setPlantID}  />
        <TouchableOpacity style={styles.btn}>
          <Button title="update" onPress={handleUpdate} style={styles.btnButton} />
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Button title="Delete" onPress={handleDelete} style={styles.btnButton} />
        </TouchableOpacity>
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
    fontSize:30,
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


})

export default Modify