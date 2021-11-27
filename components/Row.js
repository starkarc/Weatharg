import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
 
 
export default class Row extends Component{
  render() {
    return (
      <View style={styles.containerRow}>
      {this.props.children}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
  }
});