import React,{useState} from 'react'
import { View, Text , Image ,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-paper'

const NewDeliveries = () => {

    const [OrderID,setOrderID]=useState('orderID : 9009')
    const [BoothID,setBoothID]=useState('BoothID : 999')
    const [custAddr,setCustAddr]=useState('Customer address : xyz')
    const navigation = useNavigation()


    const handleClick=()=>{
        console.log("hello")
    }

  return (
    <View>

      <View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("DDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>


<View style={styles.containerImgMain}>
    <Image source={require('../../../assets/img/delivery_boy.png')} style={styles.imgMain}/>
</View>

<View>
    <Text style={styles.heading}>Newly assigned deliveries</Text>
</View>


    <View style={styles.data}>
    <TextInput disabled value={BoothID} style={styles.input} />
        <TextInput disabled value={OrderID}  style={styles.input} />
        <TextInput disabled value={custAddr}  style={styles.input} />
        <TouchableOpacity style={styles.btn}>
            <Button title="Confirm" onPress={handleClick} />
        </TouchableOpacity>
    </View>


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
    heading:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        margin: 50
    },
    data:{
       marginLeft:30,
      
    },
    input:{
        backgroundColor:'#fff',
        borderWidth:1,
        marginBottom:20,
        width:300,
        height:30,
        textAlign:'center'
    },
    containerImgMain:{
        marginLeft:100
    },
    imgMain:{
        width:150,
        height:150
    },

    btn:{
        width:100,
        marginLeft:100
    }
  
    
  
  })


export default NewDeliveries