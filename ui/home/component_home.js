import * as React from 'react';
import { View, Text} from 'react-native';

function Versions({ navigation }) {
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
  
export default Versions;