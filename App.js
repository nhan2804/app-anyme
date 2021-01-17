import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from 'axios';
export default function App() {
  const handleLoadAnime=()=>{
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        alert(persons[0]);
      })
      .catch(error => console.log(error));
  }
  return (
    <View>
      <Text>
        <View style={styles.header}><Text>Ngọc Nhẫn</Text></View>
        <View >
        <Text>Anyme</Text>
        <Button onPress={handleLoadAnime} title="Anime">
          
        </Button>
        </View>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 50,
    color: 'red',
  }
});
