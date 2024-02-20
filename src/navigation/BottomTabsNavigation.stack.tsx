import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DogCeo from '../screens/docApi/DogCeo';
import NewsPapers from '../screens/chroniclingAmerica/NewsPapers';
import Journals from '../screens/crossRef/Journals';
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
            return <AntDesignIcon name="home" color={color} size={size} />;
          }
          if (route.name === 'CHRONICLING_AMERICA_STACK') {
            return (
              <AntDesignIcon name="infocirlceo" color={color} size={size} />
            );
          }
          if (route.name === 'CROSSREF') {
            return <AntDesignIcon name="areachart" color={color} size={size} />;
          }
          if (route.name === 'WAZIRC') {
            return <AntDesignIcon name="staro" color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: Colors.secundary,
        tabBarInactiveTintColor: Colors.text,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.black_200,
        },
      })}>
      <Tab.Screen
        name="DOG_API_STACK"
        component={DogCeo}
        options={{title: 'Inicio'}}
      />
      <Tab.Screen
        name="CHRONICLING_AMERICA_STACK"
        component={NewsPapers}
        options={{title: 'Inicio'}}
      />
      <Tab.Screen
        name="CROSSREF"
        component={Journals}
        options={{title: 'Inicio'}}
      />
      <Tab.Screen
        name="WAZIRC"
        component={Tickers}
        options={{title: 'Inicio'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigationStack;
