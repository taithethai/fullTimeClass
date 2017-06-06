import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.topLogo} source={require('../assets/images/drink-the-sea.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  topLogo: {
    flex: 2,
  },
  article: {
    flex: 4,
    backgroundColor: "whitesmoke",
  },
});
