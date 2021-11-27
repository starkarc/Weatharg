import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
 
export default class Col extends Component{
  render() {
    let customStyles = Object.assign({}, this.props.customStyles, styles.containerCol);
    return (
      <View>
      {this.props.children}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  containerCol: {
      marginLeft: 3,
      marginRight: 3,
  }
});