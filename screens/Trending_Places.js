import React, {useEffect, useState} from 'react';
import {
  Card,
  Appbar,
  Title,
  Paragraph,
  Button,
  IconButton,
  Colors,
} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {color} from 'jimp';

const Trending_Places = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch('http://192.168.2.12:8080/fetch_trending_places', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => setData(json.data.scanned_response.Items)
      )
      .catch(error => console.error(error))
      .finally(() => {
        return setLoading(false);
      });

    return function cleanup() {
      mounted = false;
    };
  }, []);

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
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          data.map(el => {
            return <Card style={{margin: 10}}>
              <Card.Content>
                <Title>{el.place_name}</Title>
              </Card.Content>
              <Card.Cover
                source={{uri:el.image_url}}
              />
              <Card.Actions>
                <IconButton
                  icon="heart"
                  color={Colors.red500}
                  size={20}
                  onPress={() => console.log('Pressed')}
                />
                <Paragraph style={styles.para}>{el.likes} likes</Paragraph>
                {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
                <Card.Content>
                  <Paragraph>{el.check_in} check-ins</Paragraph>
                </Card.Content>
              </Card.Actions>
            </Card>
          })
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: '#b7dfdb',
  //   alignItems: 'center',
  //   //justifyContent: 'center',
  //   resizeMode: 'contain',
  //   paddingTop: Platform.OS === "android" ? 32 : 0
  // },
  written: {
    color: '#fff',
    alignItems: 'center',
  },

  topNavigation: {
    backgroundColor: '#0097a7',
  },
  page: {
    backgroundColor: '#b7dfdb',
    flex: 1,
  },
  button: {
    color: 'red',
    //backgroundColor: '#78a834',
  },
  para: {
    textAlign: 'right',
  },
  //Add comment
});

export default Trending_Places;
