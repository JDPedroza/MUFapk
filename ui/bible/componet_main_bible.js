import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import configBibleIcons from '../../utils/fonts/configBibleIcons.json';
import Versions from './componet_versions'
import Books from './componet_books'
import Chapters from './componet_chapters'
import Verses from './componet_verses'
import Reading from './componet_reading'

const IconBible = createIconSetFromIcoMoon(configBibleIcons, 'BibleIcons');

function VersionsScreen({navigation}) {
  return (
    <Versions nav={navigation}/>
  );
}
function BooksScreen({route, navigation}) {
  return (
    <Books rte={route} nav={navigation}/>
  );
}
function ChaptersScreen({route, navigation}) {
  return (
    <Chapters rte={route} nav={navigation}/>
  );
}
function VersesScreen({route, navigation}) {
  return (
    <Verses rte={route} nav={navigation}/>
  );
}
function ReadingScreen({route, navigation}) {
  return (
    <Reading rte={route} nav={navigation}/>
  );
}

const Tab = createMaterialTopTabNavigator();

function Bible() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            if (route.name === 'Versión') {
              iconName = focused
                ? 'bibleBlack'
                : 'bibleWhite';
            } else if (route.name === 'Libro') {
              iconName = focused
                ? 'booksBlack'
                : 'booksWhite';
            } else if (route.name === 'Capítulo') {
              iconName = focused
                ? 'chaptersBlack'
                : 'chaptersWhite';
            } else if (route.name === 'Versículos') {
              iconName = focused
                ? 'versesBlack'
                : 'versesWhite';
            } else if (route.name === 'Lectura') {
              iconName = focused
                ? 'readingBlack'
                : 'readingWhite';
            }
              iconColor = focused
              ? '#0678de'
              : 'black';
            return <IconBible name={iconName} size={24} color={iconColor}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0678de',
          inactiveTintColor: 'black',
          labelStyle: { fontSize: 7 },
          showIcon: true,
        }}
        lazy={true}
      >
        <Tab.Screen name="Versión" component={VersionsScreen}/>
        <Tab.Screen name="Libro" component={BooksScreen} />
        <Tab.Screen name="Capítulo" component={ChaptersScreen} />
        <Tab.Screen name="Versículos" component={VersesScreen} />
        <Tab.Screen name="Lectura" component={ReadingScreen} />
      </Tab.Navigator>
  );
}

export default Bible;