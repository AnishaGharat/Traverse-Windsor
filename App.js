
import * as React from 'react';
import {
  ScrollView,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  View,
} from 'react-native';

//used the react-native-paper library for styling according to material design principles
import { BottomNavigation,  Button, Snackbar, FAB, Portal, Provider,  DefaultTheme,  } from 'react-native-paper';
import Camera from './screens/Camera';
import Map from './screens/Map';
import Trending_Places from './screens/Trending_Places';
import {SafeAreaView} from 'react-native';

//This route leads to the main home page screen that has two buttons: help and about us
const HomeRoute = () =>
  <View style={styles.appContainer}>
  <View style ={styles.buttonView}>
  <Button color='#78a834' mode="contained"  onPress={() => console.log('Pressed')}>
  About Us
  </Button>
  <Button  align='center' icon='help' color='#78a834' mode='contained'  onPress={() => console.log('Pressed')}>
  Help
  </Button>
  </View>
<View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>
    Traverse
  </Text>
  <Text style={styles.sectionTitle}>
    Windsor
  </Text>
  <Image
style={{width: 350, height: 350}}
source={require('./assets/logo_gif.gif')} />
</View>
</View>;

//When the Explore Windsor button is pressed in the bottom navigation bar, the camera.js file is called
const ExploreWindsorRoute = () =>{
return(<><Camera/></>);};

//When maps button is clicked then the map.js file is called
const MapsRoute = () => {
  return(
    <Map/>
  );
};

//Clicking the trending places button on bottom navigation opens redirects to Trending_Places.js file
const TrendingPlaceRoute = () => {
return(<><Trending_Places/></>);};

//Here the Events page is rendered if the user selects the events option in bottom navigation bar
const EventsRoute = () => {
  return(<><Events/></>);};

const App = () => {
  const [index, setIndex] = React.useState(0);
//Defining the routes to direct the application to relevant application screen
  const [routes] = React.useState([
    { key: 'home', title:'Home Page', icon:'home'},
    { key: 'explore', title: 'Explore Windsor', icon: 'camera'},
    { key: 'trends', title: 'Trending Places', icon: 'map'},
    { key: 'events', title: 'Events', icon: 'calendar'},
    { key: 'map', title: 'Map', icon: 'map'},
  ]);
    
//Rendering the bottom navigation bar
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    explore: ExploreWindsorRoute,
    trends: TrendingPlaceRoute,
    events: EventsRoute,
    map: MapsRoute,
  });

  return (

          <BottomNavigation barStyle={{ backgroundColor: '#b7dfdb'}}
          navigationState={{ index, routes }}
          inactiveColor = '#9aa6b7'
          activeColor = '#71797E'
          onIndexChange={setIndex}
          renderScene={renderScene}
          />


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#0097a7',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  appContainer: {
    backgroundColor: '#0097a7',
    flex:1,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#71797E',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 40
  },
  sectionUC: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#71797E',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 40
  },
  buttonView:{
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:10,
    marginRight:10,
  },

});

export default App;
