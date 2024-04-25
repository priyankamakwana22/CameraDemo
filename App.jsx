import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Buttons from './src/screens/Buttons';
import Camera from './src/screens/Camera';

const App = () => {
  const Stack = createStackNavigator();
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Buttons' component={Buttons} />
      <Stack.Screen name='Camera' component={Camera} />
    </Stack.Navigator>
  </NavigationContainer>
)
};

export default App;

