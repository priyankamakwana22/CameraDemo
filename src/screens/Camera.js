import {StyleSheet, Text, View, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri); // get the image address

      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
      RNFS.moveFile(filePath, newFilePath)
      .then(() => {
        console.log('Image Moved', filePath , '-- to --', newFilePath)
      }).catch(error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Pressable style={styles.btn} onPress={captureHandle}>
          <Text style={styles.txt}>Capture</Text>
        </Pressable>
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {flex: 1},
  txt: {fontSize: 20, fontWeight: 'bold', color: '#000000'},

  btn: {
    backgroundColor: 'lightgreen',
    width: 170,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  preview: {flex: 1, alignItems: 'center', justifyContent: 'flex-end'},
});
