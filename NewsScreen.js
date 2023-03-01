import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, {useContext, useState}from 'react'
import { NewsContext } from './contextapi';
import NewsItem from './NewsItem';
import { Carousel } from 'react-native-snap-carousel';



const NewsScreen = () => {

  const {news:{articles}} = useContext(NewsContext);


  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      
        
      {
        articles&&(
          <Carousel
            layout={'stack'}
            data={articles}
            renderItem={({item, index})=>{
              return(
                <NewsItem
                item={item}
                index={index}
              />
              )
            }}
            vertical={true}
            sliderHeight={300}
            itemHeight={windowHeight}
            onSnapToItem={(index)=>setActiveIndex(index)}
          />
        )
      }
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    justifyContent:'center',
  },
});

export default NewsScreen