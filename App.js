import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import MyStack from './navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>This is Quizzo Mania</Text> */}
      {/* <Home /> */}
      {/* <Quiz/> */}
      {/* <Result/> */}
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 2,
    flex: 1,
    backgroundColor: '#EDE4FF',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
