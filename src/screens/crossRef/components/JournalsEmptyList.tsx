import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from '../../../components/atoms/TextComponent';

const JournalsEmptyList = () => {
  return (
    <View style={styles.container}>
      <TextComponent text={'Not Data Here'} H2 bold />
    </View>
  );
};

export default JournalsEmptyList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
