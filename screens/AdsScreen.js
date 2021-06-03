import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableHighlight} from 'react-native';

const Ads = props => {
  const [ads, setAds] = useState([{}]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?count=3')
      .then(response => response.json())
      .then(json => setAds(json.results))
  }, []);

  console.log(ads)
  return (
    <ScrollView contentContainerStyle={styles.adsContainer} >
      <Text style={styles.heading}>Ads Corner</Text>
      <View style={styles.images}>
          
        {ads.length > 0 ? (
          ads.map(ad => (
            <TouchableHighlight style={styles.imageContainer} onPress={()=>{console.log(ad.name)}} key={ad.id}>
              <Image style={styles.image} source={{uri: ad.image ? ad.image : ""}} />
            </TouchableHighlight>
          ))
        ) : (
          <Text>No Ads to show</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    adsContainer: {
        alignItems: 'center'
    },
    heading: {
        fontSize: 30
    },
    imageContainer: {
        marginVertical: 10
    },
    image: {
        width: Dimensions.get('window').width - 50,
        height: 200,
        borderRadius: 10
      },
});

export default Ads;
