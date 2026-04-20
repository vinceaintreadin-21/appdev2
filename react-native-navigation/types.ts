import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

//Root 
type RootStackParamList = {
    Home: undefined;
    Details: {
        itemId: number;
        otherParam?: string;
    }
}

//Home
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

//Details
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export type DetailsProps = {
  route: DetailsScreenRouteProp;
};
