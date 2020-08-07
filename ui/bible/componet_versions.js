import React, { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList} from 'react-native';

const VERSIONS = [
    {
        id : 'RVR',
        title : 'Reina-Valera Antigua',
    },
    {
        id : 'RVR60',
        title : 'Reina-Valera 1960',
    },
    {
        id : 'lbla',
        title : 'La Biblia de las Américas',
    },
    {
        id : 'jbs',
        title : 'Biblia del Jubileo',
    },
    {
        id : 'dhh',
        title : 'Dios Habla Hoy',
    },
    {
        id : 'ntv',
        title : 'Nueva Traducción Viviente',
    },
    {
        id : 'nvi',
        title : 'Nueva Versión Internacional',
    },
    {
        id : 'pdt',
        title : 'Palabra de Dios para Todos',
    },
    {
        id : 'tla',
        title : 'Traducción en lenguaje actual',
    },
]

const Version = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const Versions = (props) => {

    const [selectedId, setSelectedId] = useState(null);
    const navigation = props.nav
  
    const VersionListItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#5db1de" : "white";
      
      return (
        <Version
          item={item}
          onPress={() => {
              setSelectedId(item.id)
              navigation.navigate('Libro', {
                  version: item.id,
                });
          }}
          style={{ backgroundColor }}
        />
      );
  };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={VERSIONS}
          renderItem={VersionListItem}
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
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
  });
  
export default Versions;