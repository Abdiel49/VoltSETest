import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/colors';

const ListSeparator = () => {
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.separator} />
    </View>
  );
};

export default ListSeparator;

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  separator: {
    width: 200,
    height: 4,
    borderRadius: 20,
    backgroundColor: Colors.white_200_a8,
  },
});
