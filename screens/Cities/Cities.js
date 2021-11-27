import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../../components/Styles';
import StylesButton from '../../components/SylesButton';
import ListCities from '../ListCities/ListCities';
import ClimeListCity from '../ClimeListCity/ClimeListCity';
const img = require('../../assets/Ciudades.jpg');
  
const CitiesSchema = Yup.object().shape({
    country: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
  });

const Cities = ({navigation}) => {
    const [error, setError] = useState('')
    let value = []
    let cities = []

    const handlerSubmit = async values => {
        setError("")
        try {
            value = await AsyncStorage.getItem('databaseCities');
            if(value){
                cities = JSON.parse(value);
                if(cities.find((item) => item.city.trim().toUpperCase() === values.city.toUpperCase())){
                    return setError("The value is duplicate!")
                }else{
                    cities.push(values);
                    await AsyncStorage.setItem("databaseCities", JSON.stringify(cities));
                    console.log(cities);
                }                                
            }else{
                cities.push(values);
                await AsyncStorage.setItem('databaseCities', JSON.stringify(cities));
                console.log(cities);
            }      
        }catch (error) {
            AsyncStorage.removeItem('databaseCities');
            console.log(error);
        }
    }

    const deleteStorage = () => {
        AsyncStorage.removeItem('databaseCities');
    }

    return (
        <View style={Styles.containerTakeDataCity}> 
            <ImageBackground source={img} style={Styles.imageCities}>           
                <Formik initialValues={{country: '', city: ''}} validationSchema={CitiesSchema} onSubmit={handlerSubmit}>  
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                        <View style={Styles.form_group}>
                            <Text style={StylesButton.btnText}>Pais</Text>
                            <TextInput name="InputCountry" style={Styles.form_input} placeholder="Añadir Pais"                            
                            onChangeText={handleChange('country')}
                            onBlur={handleBlur('country')}
                            value={values.country}/>
                            {errors.country && touched.country ? <Text style={Styles.error}>(errors.country)</Text> : null}
                        </View>
                        <View style={Styles.form_group}>
                            <Text style={StylesButton.btnText}>Ciudad</Text>
                            <TextInput name="InputCity" style={Styles.form_input} placeholder="Añadir Ciudad"
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}/>
                            {errors.city && touched.city ? <Text style={Styles.error}>(errors.city)</Text> : null}
                        </View>
                        <TouchableOpacity style={StylesButton.btnAddCity}
                                activeOpacity={0.7} onPress={handleSubmit}  >                    
                                <Text style={StylesButton.btnTextAddCity}>Añadir</Text>
                        </TouchableOpacity>
                        </>
                    )}
                </Formik>
                <TouchableOpacity style={StylesButton.btnCity} >
                    <Icon name="weather-sunset" size={30} color="#E5097F" 
                    onPress={() => navigation.navigate(ClimeListCity)}/>   
                </TouchableOpacity>
                <TouchableOpacity style={StylesButton.btnCities} >
                    <Icon name="home-city" size={30} color="#E5097F" 
                    onPress={() => navigation.navigate(ListCities)}/>   
                </TouchableOpacity>                                             
                
            </ImageBackground>            
        </View>
    )

};

export default Cities;

