import {Pressable, StyleSheet, Text, View} from 'react-native';
import Camera from './Camera';

const Buttons = ({navigation}) => {
  const openCamera = () => {
    navigation.navigate('Camera')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Camera Demo</Text>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.txt}>Open Camera</Text>
      </Pressable>
    </View>
  );
};
export default Buttons;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  txt: {fontSize: 20, fontWeight: 'bold', color: '#000000'},
  btn: {
    backgroundColor: 'lightgreen',
    width: 170,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
