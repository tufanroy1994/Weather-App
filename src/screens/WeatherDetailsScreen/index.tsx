import React, {useEffect, useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {BaseButton, BaseLoader, BaseText} from '../../components';
import {AppStrings} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {RootRouteProps} from '../../navigation/types/RootStackTypes';
import {axiosClient} from '../../config/Axios';
import {ApiEndpoints} from '../../config/ApiConstants';
import {API_Key} from '../../utils';
import {styles} from './styles';

const WeatherDetailsScreen = () => {
  const {params} = useRoute<RootRouteProps<'WeatherDetailsScreen'>>();
  const navigation = useAppNavigation('WeatherDetailsScreen');

  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get(
        ApiEndpoints.WEATHER_DATA + `?key=${API_Key}&q=${params.city}`,
      );
      setWeatherData(response.data);
      console.log(weatherData);
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          Alert.alert('Invalid City', 'The city you entered was not found.');
        } else {
          Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
      } else if (error.request) {
        Alert.alert('Network Error', 'Please check your internet connection.');
      } else {
        Alert.alert('Error', error.message || 'An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <BaseLoader />;
  }

  if (!weatherData) {
    return null;
  }

  const {location, current} = weatherData;

  return (
    <View style={[styles.contentContainer]}>
      <BaseText>{location.name}</BaseText>
      <Text style={styles.temp}>{current.temp_c}°C</Text>
      <View style={styles.row}>
        <Image
          source={{uri: 'https:' + current.condition.icon}}
          style={styles.icon}
        />
        <Text style={[styles.condition]}>{current.condition.text}</Text>
      </View>
      <Text style={[styles.humidity]}>
        {AppStrings.humidity}: {current.humidity}%
      </Text>
      <View style={[styles.buttonContainer]}></View>
      <BaseButton title={AppStrings.back} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default WeatherDetailsScreen;
