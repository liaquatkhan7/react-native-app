// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
  // render() {
    // return (
      // <View style={styles.container}>
        // <Text>New good looking app is on its way</Text>
      // </View>
    // );
  // }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componenet/header';
import AlbumList from './src/componenet/AlbumList';

export default class App extends React.Component {
    render() {  
      return (
          <View>
                <Header headerText='Albums'/>
                <AlbumList />
          </View >
              );
      }
  }
