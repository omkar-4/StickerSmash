import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './container/Button';
import ImageViewer from './container/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a Photo" />
        <Button label="Use this Photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 58,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  }
});
