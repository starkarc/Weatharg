import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Styles from '../../components/Styles';
import StylesButton from '../../components/SylesButton';
import ClimeCity from '../ClimeCity/ClimeCity';
const img = require('../../assets/NewCity.jpg');
  
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

const City = ({navigation}) => {
    const [town, setTown] = useState({});

    const handlerSubmit = async values => {
        try {            
            setTown(values);
            await AsyncStorage.setItem("dbCity", JSON.stringify(town));
            console.log(town);
        }catch (error) {
            AsyncStorage.removeItem('dbCity');
            console.log(error);
        }
    }

    const deleteStorage = () => {
        AsyncStorage.removeItem('dbCity');
    }

    return (
        <View style={Styles.containerTakeDataCity}> 
            <ImageBackground source={img} style={Styles.imageCities}>           
                <Formik initialValues={{country: '', city: ''}} validationSchema={CitiesSchema} onSubmit={handlerSubmit}>  
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                        <View style={Styles.form_group}>
                            <Text style={StylesButton.btnText}>Country</Text>
                            <TextInput name="InputCountry" style={Styles.form_input} placeholder="Pais"                            
                            onChangeText={handleChange('country')}
                            onBlur={handleBlur('country')}
                            value={values.country}/>
                            {errors.country && touched.country ? <Text style={Styles.error}>(errors.country)</Text> : null}
                        </View>
                        <View style={Styles.form_group}>
                            <Text style={StylesButton.btnText}>City</Text>
                            <TextInput name="InputCity" style={Styles.form_input} placeholder="Ciudad"
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}/>
                            {errors.city && touched.city ? <Text style={Styles.error}>(errors.city)</Text> : null}
                        </View>                        
                        <View style={StylesButton.btnAddCity}>
                            <Button color="#142950" onPress={handleSubmit} title='ADD CITY'/>                                                       
                        </View>                           
                        </>
                    )}
                </Formik>                                
                <Icon name="weather-hazy" size={30} title="City" color="#E5097F" style={StylesButton.btn} onPress={() => navigation.navigate(ClimeCity)}/>
            </ImageBackground>            
        </View>
    )

};

export default City;
