import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import {BaseFormInput, BaseButton} from '../../components';
import {AppStrings} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const HomeScreen = () => {
  const navigation = useAppNavigation('HomeScreen');

  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() === '') {
      Alert.alert('Error', 'Please enter a city name');
      return;
    }
    navigation.navigate('WeatherDetailsScreen', {city});
    setCity('');
  };

  return (
    <View style={[styles.contentContainer]}>
      <BaseFormInput
        title={AppStrings.enter_a_city_name}
        placeholder={AppStrings.enter_a_city_name}
        value={city}
        onChangeText={text => setCity(text.toLowerCase())}
      />
      <View style={[styles.buttonContainer]}>
        <BaseButton title={AppStrings.search} onPress={handleSearch} />
      </View>
    </View>
  );
};

export default HomeScreen;
