import React, { useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import firebase from '../../utils/firebase/configFirebase'
import {database} from 'firebase/database'

let VERSES = []

const Verses = (props) => {

  const [selectedId, setSelectedId] = useState(null);
  const navigation = props.nav
  const route = props.rte;
  const data = route.params;
  let verses = data['verses']
  let reading = []

  firebase.database()
    .ref(`/biblia/${data['version']}/${data['book']}/${data['chapter']}`)
    .once('value', async (snapshot) => {
        reading = snapshot.val()
  })

  if(VERSES.length>0){
    VERSES = []
  }
  for(let i=1; i<=verses[data['chapter']-1]; i++){
    VERSES.push({title: i, id: "v"+i})
  }
  

const Verse = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const VerseListItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#5db1de" : "white";

    return (
      <Verse
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          navigation.navigate('Lectura', {
            version: data['version'], 
            book: data['book'],
            chapter: data['chapter'],
            verse: item.title,
            verses: reading,
          });
        }}
        style={{ backgroundColor }}
      />
    );
  };

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={VERSES}
        renderItem={VerseListItem}
        keyExtractor={(item) => item.id}
        numColumns={5}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
        flex: 1,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
      fontSize: 15,
      textAlign: 'center',
    },
  });
  
export default Verses;