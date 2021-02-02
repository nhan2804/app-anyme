import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Button, ScrollView ,Image} from 'react-native';
import axios from 'axios';
export default function App() {
  const [images,setImages]= useState([]);
  const handleLoadAnime=()=>{
    
    axios.get('https://picsum.photos/v2/list')
      .then(res => {
        setImages(res.data);
      })
      .catch(error => alert("err"+ error));
  }
  useEffect(handleLoadAnime,[]);
  return (
    <View>
      <Text 
      style={{fontSize:20,color:'orange',marginTop:20,...styles.list}}>App - Call Api</Text>
      <View>
        <Button title="FETCHING DATA"></Button>
      </View>
      <ScrollView>
      <View style={styles.list}>
      <Text >List Author</Text>
      {images.map((e,i)=>{
        return (
          <View style={styles.items} key={e.id}>
            <Text >{e.author}</Text>
            <Image style={{width: 40, height: 40}} source={{uri:e.download_url}}></Image>
          </View>
        );
      })
      }
      </View>
      </ScrollView>
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
    marginTop:30
  },
  list:{
    paddingHorizontal:20,
    paddingTop:40
  },
  items:{
    backgroundColor:'pink',
    padding:40,
    marginBottom:10,
    fontSize: 50,
    borderRadius:6
  }
});
