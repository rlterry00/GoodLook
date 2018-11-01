import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { Permissions, Notifications } from 'expo';
import PhoneNumber from './components/PhoneNumber';
import  PushNotes  from "./components/PushNotes";

export default class App extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
    <PushNotes />
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
