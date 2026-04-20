import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

//Root
export type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: number;
    otherParam?: string;
  };
};

//Home
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

//Details
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Details'
>;

export type DetailsProps = {
  route: DetailsScreenRouteProp;
};
