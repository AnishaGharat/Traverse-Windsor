
import React from 'react';
import { Card, Appbar, Title, Paragraph, Button, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView} from 'react-native';
import { color } from 'jimp';

const Events_Page = () => {
        const _goBack = () => console.log('Went back');
      
        const _handleSearch = () => console.log('Searching');
      
        const _handleMore = () => console.log('Shown more');
  return (
    <View style={styles.page}>
    <Appbar.Header style={styles.topNavigation}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Events" style={styles.written} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  <ScrollView>
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Holi Festival</Title>
  <Title>{" - "}</Title>
  <Title>29th July 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Enjoy festival of colours!!</Paragraph>
    <Card.Cover source={require('../assets/holi.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>98 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>51 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Music Festival</Title>
  <Title>{" - "}</Title>
  <Title>25th August 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Dance to the tunes of heaven!!</Paragraph>
    <Card.Cover source={require('../assets/music.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>34 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>14 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Halloween Party</Title>
  <Title>{" - "}</Title>
  <Title>31st October 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Figure out your spooky side!!</Paragraph>
    <Card.Cover source={require('../assets/halloween.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>43 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>42 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Christmas Party</Title>
  <Title>{" - "}</Title>
  <Title>25th December 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Perfect spot for Holiday Party!!</Paragraph>
    <Card.Cover source={require('../assets/christmas.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>61 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>38 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>

  {/* <Card style={{margin:10}}>
    <Card.Content>
      <Title>Art Gallery Of Windsor</Title>
    </Card.Content>
    <Card.Cover source={require('../assets/artgallery.jpg')} />
    <Card.Actions>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>19 likes</Paragraph>
    <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button>
    <Card.Content>
    <Paragraph>20 check-ins</Paragraph>
    </Card.Content>
    </Card.Actions>
  </Card> */}
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
    backgroundColor: '#5c8b2b',
  },
  para:
  {
    // textAlign:'right',
    paddingLeft: 10,
    paddingRight: 10,
  }
  //Add comment
});

export default Events_Page;


