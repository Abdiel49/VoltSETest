import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from '../../styles/colors';
import {ILoadingProps} from '../../types';
import LoadingModal from '../organisms/LoadingModal';

interface ScreenViewProps extends PropsWithChildren, ILoadingProps {
  safeAreaStyle?: StyleProp<ViewStyle>;
  mainViewStyle?: StyleProp<ViewStyle>;
}

const ScreenView = (props: ScreenViewProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {props.isLoading && props.setIsLoading && (
        <LoadingModal
          isVisible={props.isLoading}
          setIsVisible={props.setIsLoading}
        />
      )}
      <View style={styles.main}>{props.children}</View>
    </SafeAreaView>
  );
};

export default ScreenView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white_200,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.white_200,
  },
});
