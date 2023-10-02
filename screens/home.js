import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Title from '../components/title'
import {Image, TouchableOpacity} from 'react-native'

const Home=({navigation})=>{
  return (
    <View style={styles.container}>
      <Title/>
      {/* <View style={styles.bannerContainer}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3407/3407022.png'}} 
          style={styles.banner}
        />
      </View> */}
      <View style={styles.bottom}>
          <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/6988/6988665.png'}} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>General    Knowledge</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3067/3067513.png'}} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Computer Science</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3311/3311579.png'}} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/897/897368.png'}} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Mathematics</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}
    


const styles = StyleSheet.create({
  banner:{
    height: 200,
    width: 200,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200,
    
  },
  container:{
    paddingTop:40,
    paddingHorizontal:5,
    height:"100",
  },
  bottom:{
    marginBottom: 12,
    paddingVertical: 0,
    justifyContent:'space-between',
    flexDirection:'row',
    
  },
  button:{
    padding:50,
    paddingHorizontal:50,
    // marginLeft:0,
    // marginRight:30,
    borderRadius:16,
    alignItems:'center',
    marginTop:70,
  },
  icon:{
    width: 80,
    height:80,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop:20,
    width:110,
    textAlign:'center',
  },
  

})

export default Home;