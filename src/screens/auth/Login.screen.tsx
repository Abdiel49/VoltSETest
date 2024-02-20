import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CommonActions, CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigation/RootNavigation';
import {AuthStackParamList} from '../../navigation/AuthNavigation.stack';

import {Colors} from '../../styles/colors';

type LoginScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'LOGIN_SCREEN'>,
  NativeStackScreenProps<RootStackParamList>
>;
const LoginScreen = (props: LoginScreenProps) => {
  const hanldeLoginBtn = () => {
    // props.navigation.navigate('BOTTOM_TABS_NAVIGATION_STACK', {
    //   screen: 'DOG_API_STACK',
    // });
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'BOTTOM_TABS_NAVIGATION_STACK',
          },
        ],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <Text style={styles.text}>LoginScreen</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={hanldeLoginBtn}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
  },
  loginBtn: {
    backgroundColor: Colors.blue,
  },
});
