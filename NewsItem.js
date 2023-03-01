import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get("window").height;

const NewsItem = ({item, index}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>

      {
        (item.urlToImage===null)?(
          <Image source={require("./assets/placeholder.jpg")}
          style={{height:'45%', resizeMode:'cover', width:'100%', borderRadius:10}}
        />
        ):(<Image source={{uri:item.urlToImage}}
          style={{height:'45%', resizeMode:'cover', width:'100%', borderRadius:10}}
        />)

        
      } 
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.des}>{item.description}</Text>
        <Text style={{color:'black', width:"100%"}}>Shot by {item.author??"Unknown"}</Text>

        <View style={{ width:'100%', margin:10}}>
          <TouchableOpacity style={{ width:70}}>
            <Text style={{color:"black", fontWeight:700, width:"100%"}}>Read More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.swipeToken}>
          <Text>Swipe Up</Text>
        </View>

      </View>
    </View>
  )
}

export default NewsItem

const styles = StyleSheet.create({
    swipeToken:{
      width:100, 
      height:30, 
      justifyContent:'center',
      backgroundColor:'grey', 
      alignItems:'center',
      borderRadius:20,
      opacity:0.4,
      position:'absolute',
      bottom:20,
    },
    des:{
      fontSize:16,
      color:'black',
      width:'100%',
      textAlign:"justify",
      marginBottom:8,
    },
    title:{
        fontSize:25,
        color:"black",
        marginTop:10,
        paddingBottom:10,
        fontWeight:'bold',
        width:'100%',

    },
    container:{
      backgroundColor:"#fff",
      alignItems:'center',
      padding:10,
      paddingBottom:20,
    },
    newsContainer:{
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'#F6F2F2',
      height:'95%',
      width:'100%',
      borderRadius:10,
      elevation:10,
      padding:10,
    },
})