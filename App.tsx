import React from 'react';
import {StatusBar, View} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppColors, navigationRef} from './src/utils';
import {HomeScreen, WeatherDetailsScreen} from './src/screens';
import {RootStackParamList} from './src/navigation/types/RootStackTypes';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const appTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.PRIMARY_BACKGROUND,
      text: AppColors.PRIMARY_TEXT,
    },
  };
  return (
    <NavigationContainer theme={appTheme} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false, statusBarStyle: 'dark'}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="WeatherDetailsScreen"
          component={WeatherDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
