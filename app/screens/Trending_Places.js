
import React from 'react';
import { Card, Appbar, Title, Paragraph, Button, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView} from 'react-native';
import { color } from 'jimp';
<<<<<<< HEAD
import Cards from '../components/TrendingPlaces-Cards.js'

const trendingPlaces=[
  {
    title:'University of Windsor',
    imgSrc:require('../assets/universitywindsor.jpeg'),
    numLikes:24,
    numCheckins:45,
    type:'School'
  },
  {
    title:'Windsor Riverfront',
    imgSrc:require('../assets/riverfront.jpg'),
    numLikes:14,
    numCheckins:15,
    type: 'Parks',
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
    numCheckins:25,
    type:'Attractions',
  },
  {
    title:'Devonshire Mall',
    imgSrc:require('../assets/devonshire.jpg'),
    numLikes:64,
    numCheckins:55,
    type:'Shopping'
  },
  {
    title:'Walkerville Brewery',
    imgSrc:require('../assets/brewery.jpg'),
    numLikes:54,
    numCheckins:65,
    type: 'Restaurants'
  },
  {
    title:'Jackson Park',
    imgSrc:require('../assets/jackson.jpg'),
    numLikes:26,
    numCheckins:47,
    type:'Parks'
  },
  {
    title:'Art Gallery Of Windsor',
    imgSrc:require('../assets/artgallery.jpg'),
    numLikes:36,
    numCheckins:34,
    type:'Attractions'
  }
]
=======
>>>>>>> parent of 11a27f4 (Arranged the trending places data in arrays)

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
<<<<<<< HEAD
  {trendingPlaces.map(place =>(
    <Cards title={place.title} imgSrc={place.imgSrc} numLikes={place.numLikes} numCheckins={place.numCheckins}/>
  )) } 
=======
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>University Of Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/universitywindsor.jpeg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>81 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>56 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Windsor Riverfront</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/riverfront.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>74 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>52 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Caesars Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/caesors.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>65 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>46 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Old Walkerville Neighborhood</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/walkerville.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>59 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>40 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Devonshire Mall</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/devonshire.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>48 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>36 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Walkerville Brewery</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/brewery.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>36 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>34 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Jackson Park</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/jackson.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>25 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>21 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Art Gallery Of Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/artgallery.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>19 likes</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    <Paragraph>20 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card>
>>>>>>> parent of 11a27f4 (Arranged the trending places data in arrays)
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
});

export default Trending_Places;

