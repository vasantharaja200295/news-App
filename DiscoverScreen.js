import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{useContext} from 'react'
import  Carousel  from 'react-native-snap-carousel'
import { NewsContext } from './contextapi';
import {categories, sources} from './api'

const DiscoverScreen = () => {

  const { setCategory,setSource } = useContext(NewsContext)
  const windowWidth = Dimensions.get('window').width;
  const slideWidth = Math.round(windowWidth/2.5)
  
  return (
    <View style={styles.discover}>
    {/* Search */}


    {/* Category */}
      <Text style={styles.subtitle}>Categories</Text>

      <Carousel
        layout={'default'}
        data= {categories}
        renderItem={({item, index})=>{
          return(<View  style={styles.slideContainer}>
            <TouchableOpacity style={styles.slide} onPress={()=>setCategory(item.name)}>
              <Image source={{uri:item.pic}} style={styles.categoryImage}/>
              <Text style={styles.categoryText}>{item.name.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>)
        }}

        sliderWidth={windowWidth}
        itemWidth = {slideWidth}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}

      />

      {/* Sources */}
      <Text style={styles.subtitle}>Sources</Text>
      <View style={styles.source}>
        {
          sources.map((item)=>(
            <TouchableOpacity 
              key={item.id}
              onPress={()=>setSource(item.id)}
              style={styles.sourceContainer}>
              <Image source={{uri:item.pic}} style={styles.sourceImage}/>
            </TouchableOpacity>
          ))
        }
      </View>



    </View>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  discover:{
    padding:10,
    alignItems:'center',
  },
  subtitle:{
    fontSize:24,
    color:'black',
    fontWeight:'bold',
    alignSelf:'flex-start'
  },
  categoryImage:{
    height:40,
    width:40,
    margin:10,
  },
  categoryText:{
    fontSize:15,
    color:'black',
    fontWeight:'600',
    textTransform: 'capitalize',
  },

  slideContainer:{
    flexDirection:'column',
    height:130,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },

  slide:{
    height:'100%',
    width:"100%",
    backgroundColor:'#F2F2F2',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    elevation:10,
  },
  sourceContainer:{
    height:150,
    width:'40%',
    borderRadius:10,
    margin:15,
    backgroundColor:'#F2F2F2',

  },
  sourceImage:{
      height:"100%",
      borderRadius:10,
      resizeMode:'cover',
  },
  source:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingVertical:15,
    justifyContent:'space-around'

  }

})