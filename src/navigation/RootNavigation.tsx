import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import AuthNavigationStack from './AuthNavigation.stack';
import BottomTabsNavigationStack, {
  BottomTabsNavigationParamList,
} from './BottomTabsNavigation.stack';

export type RootStackParamList = {
  AUTH_NAVIGATION_STACK: NavigatorScreenParams<undefined>;
  BOTTOM_TABS_NAVIGATION_STACK: NavigatorScreenParams<BottomTabsNavigationParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AUTH_NAVIGATION_STACK">
        <Stack.Screen
          name={'AUTH_NAVIGATION_STACK'}
          component={AuthNavigationStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'BOTTOM_TABS_NAVIGATION_STACK'}
          component={BottomTabsNavigationStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
