- removed -
```
<Text style={{ color: '#fff'}}>Open up App.js to start working on your app!</Text>
```
    -- import { StyleSheet, --Text-- , View } from 'react-native';
    -- remove Text

- default changed
```
container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
```

- export 'Image' to components - ImageViewer.js > import { StyleSheet, Image, View } from 'react-native';
- removed from app.js view style=style.imageContainer : 
```
<Image source={PlaceholderImage} style={styles.image} />
```