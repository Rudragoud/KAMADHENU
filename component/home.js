import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { View, Text ,Button,Image,StyleSheet} from 'react-native'
import React from 'react'



const Home = () => {
    
    const navigation = useNavigation()
    function handleClick(val){
       navigation.navigate(val)
    }

    

  return (
    <View style={styles.mainContainer}>
<Text style={styles.head}>KAMADHENU</Text>
<View style={styles.container}>
<TouchableOpacity onPress={()=>handleClick("Factory")}>
    <Image source={require('../assets/img/599.jpg')} style={styles.img} />
    <Text style={styles.heading}>Factory</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>handleClick("Booth")}>
    <Image source={require('../assets/img/5834842.jpg')} style={styles.img} />
    <Text style={styles.heading}>Booth</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>handleClick("Customer")}>
    <Image source={require('../assets/img/customer.jpg')} style={styles.img} />
    <Text style={styles.heading}>Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>handleClick("Delivery")}>
    <Image source={require('../assets/img/3683230.jpg')} style={styles.img} />
    <Text style={styles.heading}>Delivery boy</Text>
      </TouchableOpacity>


      </View>
    </View>
  )
}


const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },

    head:{
fontSize:30,
fontWeight:'bold'   ,
textAlign:'center' ,
marginTop:100
},
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    padding:20,
    flexDirection:'row'
},
heading:{
   textAlign:'center',
   fontWeight:'bold' 
},
img:{
    width:150,
    height:150,
    marginTop:40,
    marginRight:10
}
})

export default Home