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
import * as firebase from 'firebase';
import axios from 'axios';

const config = {
  apiKey: "AIzaSyAVsIxcYz_sUe_3qBib9zmNms1lzDDw9zk",
  authDomain: "goodlookout-b0607.firebaseapp.com",
  databaseURL: "https://goodlookout-b0607.firebaseio.com",
  projectId: "goodlookout-b0607",
  storageBucket: "goodlookout-b0607.appspot.com",
  messagingSenderId: "1041005729245"
};

firebase.initializeApp(config);

export default class PushNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      notification: null,
      title: 'Hello World',
      body: 'Say something!',
    };
    
  }
componentDidMount() {
  this.registerForPushNotificationsAsync();
}


registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
  let monToken = 'ExponentPushToken[uOH2unOZ4GJEbkG-btmgTd]';
  let ipadToken = 'ExponentPushToken[u_0QQ8PHIcw2b1b9-WiOtT]';
  // function tokenPush(PhoneNumber, PushToken) {
  //   firebase.database().ref('User/').push().set({
  //     PhoneNumber: 'ipad',
  //     PushToken: token
  //   });
    
  // }
  // tokenPush();

  let config = {
    headers: {
      'accept': 'application/json',
      'accept-encoding': 'gzip, deflate',
      'content-type': 'application/json'
    }
  };
  setTimeout(() => {
  axios.post('https://exp.host/--/api/v2/push/send', 
  { 
  to: monToken,
  title:"Good LookOut Request from Ramon",
  body: "Could you call and act like you need a ride?",
  priority: "high",
  sound: "default"
  },config).then(function(response){
    console.log(response)
  });  

}, 60000);
}





  // async registerForPushNotifications() {
  //   const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  //   if (status !== 'granted') {
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (status !== 'granted') {
  //       return;
  //     }
  //   }
    
  //   const token = await Notifications.getExpoPushTokenAsync();
  //   console.log(token);
  //   this.subscription = Notifications.addListener(this.handleNotification);

  //   this.setState({
  //     token,
  //   });
    
  // }



  // sendPushNotification(token = this.state.token, title = this.state.title, body = this.state.body) {
  //   return fetch('https://exp.host/--/api/v2/push/send', {
  //     body: JSON.stringify({
  //       to: token,
  //       title: title,
  //       body: body,
  //       data: { message: `${title} - ${body}` },
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //   });
  // }

  // handleNotification = notification => {
  //   this.setState({
  //     notification,
  //   });
  // };

  render() {
  
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <Text style={styles.title}>Expo Sample Notifications App</Text>
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={title => this.setState({ title })}
          maxLength={100}
          value={this.state.title}
        />
        <Text style={styles.text}>Message</Text>
        <TextInput
          style={styles.input}
          onChangeText={body => this.setState({ body })}
          maxLength={100}
          value={this.state.body}
        />
        <TouchableOpacity
          onPress={() => this.registerForPushNotifications()}
          style={styles.touchable}>
          <Text>Register me for notifications!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.sendPushNotification()} style={styles.touchable}>
          <Text>Send me a notification!</Text>
        </TouchableOpacity>
        {this.state.token ? (
          <View>
            <Text style={styles.text}>Token</Text>
            <TextInput
              style={styles.input}
              onChangeText={token => this.setState({ token })}
              value={this.state.token}
            />
          </View>
        ) : null}
        {this.state.notification ? (
          <View>
            <Text style={styles.text}>Last Notification:</Text>
            <Text style={styles.text}>{JSON.stringify(this.state.notification.data.message)}</Text>
          </View>
        ) : null}
      </KeyboardAvoidingView>
    );
  }
}


// token();
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 8,
  },
  text: {
    paddingBottom: 2,
    padding: 8,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    padding: 8,
    width: '95%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
    width: '95%',
  },
});