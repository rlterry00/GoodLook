import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Contacts } from 'expo';
import PhoneNumber from './components/PhoneNumber';

export default class App extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      </View>
        <View style={styles.contactOne}>
        <PhoneNumber />
        </View>
        <View style={styles.contactTwo}>
        <Text style={styles.white}>Contact</Text>
        </View>
        <View style={styles.contactThree}>
        <Text style={styles.white}>Contact</Text>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  white: {
    color: 'white',
  },
  contactOne: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange', 
  },
  contactTwo: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green', 
  },
  contactThree: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue', 
  },
});
