import React, { useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";

let READING = []

const Reading = (props) => {

    const [selectedId, setSelectedId] = useState(null);
    const navigation = props.nav
    const route = props.rte;
    const data = route.params;
    let reading = data['verses']

    if(reading.length>0){
        READING = []
    }

    
    for(let i=1; i<=reading.length-1; i++){
        READING.push({text: `${i}. ${reading[i]}`, id: "v"+i})
    }
    
    //setSelectedId(data['verse'])
  
  const Verse = ({ item, onPress, style }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
          <Text style={styles.title}>{item.text}</Text>
      </TouchableOpacity>
  );
  
  const VerseListItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#5db1de" : "white";
  
      return (
        <Verse
          item={item}
          onPress={() => {
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
          data={READING}
          renderItem={VerseListItem}
          keyExtractor={(item) => item.id}
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
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 10,
    },
    title: {
      fontSize: 15,
    },
  });

export default Reading;