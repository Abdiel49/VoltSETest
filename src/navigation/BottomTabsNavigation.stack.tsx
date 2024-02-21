import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DogCeo from '../screens/docApi/DogCeo';
import NewsPapers from '../screens/chroniclingAmerica/NewsPapers';
import Journals from '../screens/crossRef/screens/Journals';
import Tickers from '../screens/wazirx/Tickers';

import {Colors} from '../styles/colors';

export type BottomTabsNavigationParamList = {
  DOG_API_STACK: undefined;
  CHRONICLING_AMERICA_STACK: undefined;
  CROSSREF: undefined;
  WAZIRC: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsNavigationParamList>();

const BottomTabsNavigationStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="DOG_API_STACK"
      screenOptions={({route}) => ({
        tabBarIcon: ({/*focused,*/ color, size}) => {
          if (route.name === 'DOG_API_STACK') {
            return <FontAwesome5Icon name="dog" color={color} size={size} />;
          }
          if (route.name === 'CHRONICLING_AMERICA_STACK') {
            return (
              <FontAwesome5Icon name="newspaper" color={color} size={size} />
            );
          }
          if (route.name === 'CROSSREF') {
            return <IoniconsIcon name="journal" color={color} size={size} />;
          }
          if (route.name === 'WAZIRC') {
            return <FontAwesome5Icon name="bone" color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: Colors.activeTabbarIcon,
        tabBarInactiveTintColor: Colors.inactiveTabbarIcon,
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.black_200,
        },
      })}>
      <Tab.Screen
        name="DOG_API_STACK"
        component={DogCeo}
        options={{title: 'Dog Breeds'}}
      />
      <Tab.Screen
        name="CHRONICLING_AMERICA_STACK"
        component={NewsPapers}
        options={{title: 'News Papers'}}
      />
      <Tab.Screen
        name="CROSSREF"
        component={Journals}
        options={{title: 'Journals'}}
      />
      <Tab.Screen
        name="WAZIRC"
        component={Tickers}
        options={{title: 'Tickers'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigationStack;
