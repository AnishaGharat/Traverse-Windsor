
import React, {useState} from 'react';
import { Card, Appbar, Title, Paragraph, Button, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView,TextInput} from 'react-native';
import { color } from 'jimp';
import Modal from 'react-native-modal';
import DateField from 'react-native-datefield';
import Toast from 'react-native-simple-toast';


const Events_Page = () => {
        const _goBack = () => console.log('Went back');
      
        const _handleSearch = () => console.log('Searching');
      
        const _handleMore = () => {return(<><New_Event/></>);};
        const [isModalVisible, setModalVisible] = useState(false);

        const toggleModal = () => {
          setModalVisible(!isModalVisible);
        };
        const saveEvent = () => {
          toggleModal();
          Toast.show('Event Saved!');
        };
  return (
    <View style={styles.page}>
    <Appbar.Header style={styles.topNavigation}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Events" style={styles.written} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="plus" onPress={toggleModal} />
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
  <Modal isVisible={isModalVisible} backdropColor={'white'} backdropOpacity={0} style={styles.container} 
  >
            <Button icon="close" onPress={toggleModal} style={ {position: 'absolute',
                            left: 250,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            } }></Button>

          <TextInput
      style={styles.textInput}
      placeholder="Event Name"
      maxLength={20}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Organiser"
      maxLength={20}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Location"
      maxLength={20}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Contact"
      maxLength={20}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Date"
      maxLength={20}
    />
          <Button style={styles.saveButton} onPress={saveEvent} color='#FFFFFF' >Save</Button>
        
      </Modal>
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
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    
    marginTop: 55,
    backgroundColor: '#F5FCFF',
    marginBottom:100,
    marginTop:100,
    width:300,
    marginLeft:30,
    height:50,
    borderRadius:10
  },
  saveButton: {
    marginTop:30,
    backgroundColor:'#0097a7',
    marginLeft:50,
    marginRight:50,
    margin: 10
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


