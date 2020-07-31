import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Bible from './ui/bible/componet_main_bible'

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Open up App.js to start working on your app</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Bible')}
      />
    </View>
  );
}

function BibleScreen() {
  return (
    <Bible/>
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App(){
  const [fontLoaded, setfontLoaded] = useState(false)
  if(!fontLoaded){
    return <AppLoading
      startAsync={fetchFont}
      onError={()=>
        console.log('Err0r')
      }
      onFinish={()=>{
        setfontLoaded(true)
        console.log('D0ne')
      }}
    />
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Bible" component={BibleScreen} options={{ title:'Biblia'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const fetchFont = () => {
  return Font.loadAsync({
    'BibleIcons': require('./assets/fonts/BibleIcons.ttf'),
  })
}

export default App;