import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Contacts } from 'expo';

export default class PhoneNumber extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {phoneNum: phoneNum};
    // }
    async  componentDidMount() {  
        const { data } = await Contacts.getContactsAsync({
          
        });
        
        if (data) {
          return data.map(a => {
           const phone = a.phoneNumbers;
           if (a.name == "Roman") {
            return phone.map(b => {
                let phoneNum = b.digits;
                   console.log(phoneNum); 
             });
           }
        
          });
           
          }
        }
   
  render() {
   
      
      return (
        <View>
        <Text style={styles.white}></Text>
        </View>  
      );
  }

}
const styles = StyleSheet.create({
    white: {
        color: 'white',
      }
});
