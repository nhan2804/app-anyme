import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ItemManga from "./ItemManga";
function Manga(props) {
  const [mangas, setmangas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/manga").then((res) => {
      setmangas(res.data);
    });
  }, []);

  return (
    <View>
      <Text>Cral Data | Fake Retrofit</Text>

      <ScrollView>
        <View>
          {mangas.map((e, i) => {
            return <ItemManga manga={e} key={e._id}></ItemManga>;
            //   return <Text>{"hehe" + e.name}</Text>;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Manga;
