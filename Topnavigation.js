import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React,{useContext} from 'react'
import { NewsContext } from './contextapi';

const TopNavigation = ({index, setIndex}) => {

    const {fetchNews} = useContext(NewsContext)


  return (
    
    <View style={{ ...styles.container, backgroundColor:'#fff'}}>
      {index === 0?(

        <View style={{...styles.btn}}>

        <Image
        style = {styles.logo}
        source={require('./assets/logo.png')}/>

            <Text style={{...styles.text, color:"#000"}}>News</Text>

        </View>
        ):(

        <TouchableOpacity style={{...styles.btn,marginLeft:-10}}
            onPress={()=>{setIndex(index===1?0:1)}}>

            <Ionicons name="chevron-back-outline" size={40} color="#4D7BFB"></Ionicons>
            <Text style={{...styles.text, color:"#000", fontSize:18}}>Home</Text>
        
        </TouchableOpacity>

        )}
        {index === 0?(

        <TouchableOpacity style={{...styles.btn,marginLeft:-10}}
            onPress={()=>{setIndex(index===0?1:0)}}>

            <Text style={{...styles.text, color:"#000", fontSize:18}}>News</Text>
            <Ionicons name="chevron-forward-outline" size={40} color="#4D7BFB"></Ionicons>
        
        </TouchableOpacity>


        ):(
            
            <Text style={{...styles.text, color:"#000", marginRight:35}}>All News</Text>)
            
        }
        {index?(

        <TouchableOpacity style={{...styles.toggle}}
            onPress={()=>fetchNews('general')}
            >
            <Ionicons name="refresh-outline" size={30} color="#4D7BFB"></Ionicons>
        </TouchableOpacity>

        ):(null)}
    </View>
  )
}

export default TopNavigation

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        elevation:5,
    },
    logo:{
        height:40,
        width:40,
        marginRight:10,
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:80,
    },
    text:{
        fontSize:24,
        fontWeight:700,
    }
})