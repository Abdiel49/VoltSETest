import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/Login.screen';

import {_screenOptionsGeneric} from './settings';

export type AuthStackParamList = {
  LOGIN_SCREEN: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={_screenOptionsGeneric}
      initialRouteName="LOGIN_SCREEN">
      <Stack.Screen name={'LOGIN_SCREEN'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack;
