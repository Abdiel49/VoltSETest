import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/colors';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <Text style={styles.text}>LoginScreen</Text>
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
});
