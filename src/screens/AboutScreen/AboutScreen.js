import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default function AboutScreen() {


    return(
       
        <Text styles={styles.footerLink}>This is a ToDo application.Everyone can set their goals here</Text>
      
    );
}

const styles=StyleSheet.create({

  footerLink: {
    color:"#788eec",
    fontWeight:"bold",
    fontSize: 16
  }
})