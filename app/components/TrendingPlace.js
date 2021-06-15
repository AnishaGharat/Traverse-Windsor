import React from 'react';
import { Card, Title, Paragraph, IconButton, Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class TrendingPlace extends React.Component {
    render() {
        const { title, imgSrc, numLikes, numCheckins }= this.props
        return <Card style={{ margin: 10 }}>
            <Card.Content>
                <Title>{title}</Title>
            </Card.Content>
            <Card.Cover source={imgSrc} />
            <Card.Actions>
                <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed')} />
                <Paragraph style={styles.para}>{numLikes} likes</Paragraph>
                {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
                <Card.Content>
                    <Paragraph>{numCheckins} check-ins</Paragraph>
                </Card.Content>
            </Card.Actions>
        </Card>;
    }
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
        flex: 1,
    },
    button:
    {
        color: 'red',
        //backgroundColor: '#78a834',
    },
    para:
    {
        textAlign: 'right',
    }
    //Add comment
});