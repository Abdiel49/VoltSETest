import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors} from '../styles/colors';

export const _screenOptionsGeneric: NativeStackNavigationOptions = {
  headerShown: false,
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.black_200,
  },
  headerTintColor: Colors.white_200,
};
