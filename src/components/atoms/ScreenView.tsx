import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from '../../styles/colors';

interface ScreenViewProps extends PropsWithChildren {
  safeAreaStyle: StyleProp<ViewStyle>;
  mainViewStyle: StyleProp<ViewStyle>;
}

const ScreenView = (props: ScreenViewProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>{props.children}</View>
    </SafeAreaView>
  );
};

export default ScreenView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
