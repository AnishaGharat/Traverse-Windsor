
import React from 'react';
import { Card, Appbar, Title, Paragraph, Button, Avatar, Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView} from 'react-native';


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
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>University Of Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/universitywindsor.jpeg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>56 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Windsor Riverfront</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/riverfront.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>52 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Caesars Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/caesors.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>46 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Old Walkerville Neighborhood</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/walkerville.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>40 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Devonshire Mall</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/devonshire.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>36 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Walkerville Brewery</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/brewery.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>34 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Jackson Park</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/jackson.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>32 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
    <Card.Content>
      <Title>Art Gallery Of Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/artgallery.jpg')} />
    <Card.Actions>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> 
    <Paragraph style={styles.para}>29 check-ins</Paragraph>
    </Card.Actions>
  </Card>
  </ScrollView>
  </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#b7dfdb',
    alignItems: 'center',
    //justifyContent: 'center',
    resizeMode: 'contain',
    paddingTop: Platform.OS === "android" ? 32 : 0
  },
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
    backgroundColor: '#78a834',
  },
  para:
  {
    textAlign:'right',
  }
  
});

export default Trending_Places;


