import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from 'react-native-webview';

const Home = props => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.iconsContainer}>
        <View
          onPress={props.navigation.navigate('MyWebView', {})}
          style={styles.iconContainer}>
          <Icon name="globe" size={100} color="black" />
          <Text>Enter Community</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="globe" size={100} color="black" />
          <Text>test</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="globe" size={100} color="black" />
          <Text>test</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="globe" size={100} color="black" />
          <Text>test</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
