import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner= score>20?"https://cdn-icons-png.flaticon.com/256/7647/7647456.png":(score>10?"https://cdn-icons-png.flaticon.com/256/8777/8777946.png" :"https://cdn-icons-png.flaticon.com/256/8858/8858767.png")
  return (
    <View style={styles.container}>
<Title titleText='RESULTS' />
<Text style={styles.scoreValue}>Score: {score}</Text>
<View style={styles.bannerContainer}>
  <Image
    source={{
      uri:resultBanner,
    }}
    style={styles.banner}
    resizeMode="contain"
  />
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
  <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>
</View>
  );
};



export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#D7BBF5',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center',
    marginTop:10,
  }
});