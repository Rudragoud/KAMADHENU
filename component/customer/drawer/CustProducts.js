import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

const CustProducts = () => {
    const navigation = useNavigation();
    const [qtyCurr, setQtyCurr] = useState(0)
    const handleClick = () => {
        console.log(qtyCurr)
    }

    return (
        <View style={styles.container}>

<View style={styles.innerContainer}>
       <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("CDashboard")}>
       <Image style={styles.imgHome} source={require('../../../assets/icons/home.png')} />
       </TouchableOpacity>
      </View>


            <View>
                <Text style={styles.heading}>Select Products</Text>
            </View>



            <ScrollView>
                <View style={styles.CardContainer}>


                    <Card style={styles.card}>
                        <Card.Title title="Blue milk" subtitle="$500" />

                        <Card.Cover source={{ uri: 'https://picsum.photos/741' }} />

            <View style={styles.containerVal}>
                        <Card.Actions >
                           <View style={styles.actionContainer} >
                          <View >
                          <TextInput placeholder="Quantity" value={qtyCurr} 
                                onChangeText={val => setQtyCurr(val)} mode="flat" backgroundColor="#fff" style={styles.input} />
                          </View>

                            <TouchableOpacity onPress={handleClick}>
                                <Text style={styles.cartBtn}>Add to cart</Text>
                            </TouchableOpacity>
                           </View>

                        </Card.Actions>
                        </View>
                    </Card>


                    <Card style={styles.card}>
                        <Card.Title title="Blue milk" subtitle="$500" />

                        <Card.Cover source={{ uri: 'https://picsum.photos/712' }} />

            <View style={styles.containerVal}>
                        <Card.Actions >
                           <View style={styles.actionContainer} >
                          <View >
                          <TextInput placeholder="Quantity" value={qtyCurr}
                                onChangeText={val => setQtyCurr(val)} mode="flat" backgroundColor="#fff" style={styles.input} />
                          </View>

                            <TouchableOpacity onPress={handleClick}>
                                <Text style={styles.cartBtn}>Add to cart</Text>
                            </TouchableOpacity>
                           </View>

                        </Card.Actions>
                        </View>
                    </Card>


                    <Card style={styles.card}>
                        <Card.Title title="Blue milk" subtitle="$500" />

                        <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />

            <View style={styles.containerVal}>
                        <Card.Actions >
                           <View style={styles.actionContainer} >
                          <View >
                          <TextInput placeholder="Quantity" value={qtyCurr}
                                onChangeText={val => setQtyCurr(val)} mode="flat" backgroundColor="#fff" style={styles.input} />
                          </View>

                            <TouchableOpacity onPress={handleClick}>
                                <Text style={styles.cartBtn}>Add to cart</Text>
                            </TouchableOpacity>
                           </View>

                        </Card.Actions>
                        </View>
                    </Card>







                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    heading: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    CardContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },


    card: {
        width: 250,
        backgroundColor: '#ddd',
        marginBottom: 50,

    },

    cartBtn: {
        backgroundColor: 'cornflowerblue',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        height: 50,
        marginTop:10,
        marginRight:15
    },


    actionContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    input:{
        width:200,
        height:50,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        marginTop:10,
        marginRight:15
    },
    
    imgHome:{
        width:30,
        height:30,

    },




})

export default CustProducts