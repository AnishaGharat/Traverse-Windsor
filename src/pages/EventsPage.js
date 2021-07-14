import React from 'react';
import { Card, Appbar, Title, Paragraph, Button, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView} from 'react-native';
import { color } from 'jimp';

const EventsPage = () => (
    <>
    <h1>Hello Traverse Windsor</h1>
    </>
);
    



const styles = StyleSheet.create({

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
      alignItems:'right'
    },
  
    para:
    {
      textAlign:'right',
    },
  
    image:
    {
      alignItems:'right'
    }
  });
  
  export default EventsPage;