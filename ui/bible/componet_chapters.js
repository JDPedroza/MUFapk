import React, { useState} from "react";
import { Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

let CHAPTERS = []

const Chapters = (props) => {
  
  const [selectedId, setSelectedId] = useState(null);
  const navigation = props.nav
  const route = props.rte;
  const data = route.params;

  if(CHAPTERS.length>0){
    CHAPTERS = []
  }

  for(let i=1; i<=data['chapter'].length; i++){
    CHAPTERS.push({title: i, id: data['book']+i})
  }

  const Chapter = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const ChapterListItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#5db1de" : "white";

    return (
      <Chapter
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          navigation.navigate('Versículos', {
            version: data['version'], 
            book: data['book'],
            chapter: item.title,
            verses: data['chapter']
          });
        }}
        style={{ backgroundColor }}
      />
    );
  };

  return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={CHAPTERS}
          renderItem={ChapterListItem}
          keyExtractor={(item) => item.id}
          numColumns={5}
          extraData={selectedId}
        />
      </SafeAreaView>
  )
  
}

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

export default Chapters;