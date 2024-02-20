import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Colors} from '../../styles/colors';
import LoadingModal from '../organisms/LoadingModal';
import {ILoadingProps} from '../../types';

interface ScreenScrollProps extends PropsWithChildren, ILoadingProps {
  safeAreaStyle?: StyleProp<ViewStyle>;
  mainScrollStyle?: StyleProp<ViewStyle>;
}

const ScreenScroll = (props: ScreenScrollProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {props.isLoading && props.setIsLoading && (
        <LoadingModal
          isVisible={props.isLoading}
          setIsVisible={props.setIsLoading}
        />
      )}
      <ScrollView style={styles.main}>{props.children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenScroll;

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
