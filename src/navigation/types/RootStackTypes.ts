import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  WeatherDetailsScreen: {city: string};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
