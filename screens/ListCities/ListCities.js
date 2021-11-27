import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Styles from '../../components/Styles';
import StylesButton from '../../components/SylesButton';
import Row from '../../components/Row';
import Col from '../../components/Col';
const img = require('../../assets/CiudadList.jpg');

export default class ListCities extends Component {
  
  constructor() {
    super()
    this.state = {
      list : ''
    }

    try {
      AsyncStorage.getItem('databaseCities').then((value) => {
        this.setState({          
          list : JSON.parse(value)
        })        
      })      
    } catch (error) {
      console.log(error)
    }
  }
  
  sendData (data) { 
    AsyncStorage.setItem("selectCityToList", JSON.stringify(data));
  }

  deleteDBCities () {
    AsyncStorage.removeItem('databaseCities');
  }
 
  parseData () {
    if(this.state.list){
      return this.state.list.map((data, i) => {
        return (
          <View style={Styles.dataList} key={i}>            
              <Row initialValues={{country: '', city: ''}}  >
                  <Col customStyles={{"flex":1}}><Text style={Styles.textApp}>{data.country}</Text></Col>
                  <Col customStyles={{"flex":1}} options={{title: "View Cities"}}><Text style={Styles.textApp}>{data.city}</Text></Col>
                  <Col customStyles={{"flex":1}}>                  
                    <TouchableOpacity style={StylesButton.btnText} >
                        <Icon name="checkbox-multiple-marked-circle-outline" size={30} color="#E5097F" 
                        onPress={this.sendData(data)}/>   
                    </TouchableOpacity>
                  </Col>
              </Row>            
          </View>
        )       
      })
    }
  }
 
  render() {  
    return (
      <View style={Styles.containerListCities}>
        <ImageBackground source={img} style={Styles.imageListCities}>
            {this.parseData()}
            <TouchableOpacity style={StylesButton.btnDeleteStorage} >
                <Icon name="delete-empty" size={30} color="#E5097F" 
                onPress={this.deleteDBCities()}/>   
            </TouchableOpacity>
        </ImageBackground>             
      </View>
    )
  }
}




