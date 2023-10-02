import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class title extends Component {
  render() {
    return (
      <View stylele={styles.container}>
        <Text style={styles.title}> QuizOmania </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize: 36,
    fontWeight: '1000',
    marginLeft: 100,
    color: '#A076F9',
  },
  container:{
    padding: 16,
    justifyContent:'center',
    alignItems:'center',
  }
})
