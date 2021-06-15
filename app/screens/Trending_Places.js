
import React from 'react';
import { Card, Appbar, Title, Paragraph, Button, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView} from 'react-native';
import { color } from 'jimp';
import TrendingPlace from '../components/TrendingPlace.js'

const trendingPlaces=[
  {
    title:'University of Windsor',
    imgSrc:require('../assets/universitywindsor.jpeg'),
    numLikes:24,
    numCheckins:45,
    type:'School'
  },
  {
    title:'Old Walkerville Neighborhood',
    imgSrc:require('../assets/walkerville.jpg'),
    numLikes:14,
    numCheckins:15
  },
  {
    title:'Caesars Windsor',
    imgSrc:require('../assets/caesors.jpg'),
    numLikes:64,
    numCheckins:55,
    type:'Hotel'
  },
  {
    title:'Old Walkerville Neighborhood',
    imgSrc:require('../assets/walkerville.jpg'),
    numLikes:34,
    numCheckins:25
  },
  {
    title:'Devonshire Mall',
    imgSrc:require('../assets/devonshire.jpg'),
    numLikes:64,
    numCheckins:55
  },
  {
    title:'Walkerville Brewery',
    imgSrc:require('../assets/brewery.jpg'),
    numLikes:54,
    numCheckins:65
  },
  {
    title:'Jackson Park',
    imgSrc:require('../assets/jackson.jpg'),
    numLikes:26,
    numCheckins:47
  },
  {
    title:'Art Gallery Of Windsor',
    imgSrc:require('../assets/artgallery.jpg'),
    numLikes:36,
    numCheckins:34
  }
]

const Trending_Places = () => {
        const _goBack = () => console.log('Went back');
      
        const _handleSearch = () => console.log('Searching');
      
        const _handleMore = () => console.log('Shown more');
  return (
    <View style={styles.page}>
    <Appbar.Header style={styles.topNavigation}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Trending Places" style={styles.written} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  <ScrollView>
  {trendingPlaces.map(place =>(
    <TrendingPlace title={place.title} imgSrc={place.imgSrc} numLikes={place.numLikes} numCheckins={place.numCheckins}/>
  )) } 
  </ScrollView>
  </View> 

  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: '#b7dfdb',
  //   alignItems: 'center',
  //   //justifyContent: 'center',
  //   resizeMode: 'contain',
  //   paddingTop: Platform.OS === "android" ? 32 : 0
  // },
  written:
  {
    color: '#fff',
    alignItems: 'center',
  },

  topNavigation:
  {
    backgroundColor: '#0097a7',
  },
  page:
  {
    backgroundColor: '#b7dfdb',
    flex:1,
  },
  button:
  {
    color: 'red',
    //backgroundColor: '#78a834',
  },
  para:
  {
    textAlign:'right',
  }
  //Add comment
});

export default Trending_Places;


