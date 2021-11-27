import React, {useState, useEffect} from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const API_KEY ='8fbf7d93eaa27eae0f86b576e3a148d2';
const img = require('../../assets/Capital.jpg');

import Styles from '../../components/Styles';
import StylesButton from '../../components/SylesButton';
import DateTime from '../../components/CurrentDate/DateTime';
import WeatherScroll from '../../components/CurrentDate/WeatherScroll';
import Home from '../Home/Home';

const ClimeCity = ({navigation}) => {
    const [dataCityClime, setDataCityClime] = useState({});
    let listita = [];

    useEffect(() => {
      (async () => {
        await AsyncStorage.getItem('dbCity').then(data => {
          listita = JSON.parse(data);
        });
          
        fetchDataCityApi(listita.country, listita.city);
      })();
    }, [])

    const fetchDataCityApi = (country, city) => {
      if(country && city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`).then(res => res.json()).then(data => {
          console.log(data);
          fetchDataCityCoord(data.coord.lon, data.coord.lat);           
        })        
      }      
    }
    
    const fetchDataCityCoord = (lon, lat) => {
      if(lon && lat) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
          console.log(data);
          setDataCityClime(data);
        })
      }
    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={img} style={Styles.imageHome}>
              <DateTime current={dataCityClime.current} timezone={dataCityClime.timezone} lat={dataCityClime.lat} lon={dataCityClime.lon}/>
              <WeatherScroll weatherData={dataCityClime.daily}/>
              <TouchableOpacity style={StylesButton.btnText} >
                  <Icon name="home" size={30} color="#E5097F" 
                  onPress={() => navigation.navigate(Home)}/>   
              </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default ClimeCity;