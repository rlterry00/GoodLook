import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Contacts, SMS } from 'expo';

export default class PhoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phoneNum: []};
    }
    
    async  componentDidMount() {  
        const { data } = await Contacts.getContactsAsync({
          
        });
        
        if (data) {
          return data.map(a => {
           const phone = a.phoneNumbers;
           if (a.name == "L") {
            return phone.map(phoneNum => {
                this.setState({phoneNum})
                   console.log(phoneNum.digits); 
             });
           }
        
          });
           
          }
        }
   
  render() {
    let phoneNum = this.state.phoneNum
      let recip = phoneNum.digits
      return (
        <View>
        <Button 
        color= 'white'
        title='text'
        onPress={
            () => {const { result } =  Expo.SMS.sendSMSAsync(recip, 'I need a ride');
        }}></Button>
        </View>  
      );
  }

}
const styles = StyleSheet.create({
    white: {
        color: 'white',
      }
});
