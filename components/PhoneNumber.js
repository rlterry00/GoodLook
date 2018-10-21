import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Contacts } from 'expo';

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
           if (a.name == "Roman") {
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
      
      return (
        <View>
        <Text style={styles.white}>{phoneNum.digits}</Text>
        </View>  
      );
  }

}
const styles = StyleSheet.create({
    white: {
        color: 'white',
      }
});
