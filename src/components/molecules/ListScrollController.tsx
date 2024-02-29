import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../../styles/colors';

type ListScrollControllerType = {
  containerStyle: StyleProp<ViewStyle>;
  onPressUp: () => void;
  onPressDown: () => void;
};

const ListScrollController = (props: ListScrollControllerType) => {
  return (
    <View style={props.containerStyle}>
      <AntDesign
        name="upcircle"
        style={styles.listControlIcon}
        onPress={props.onPressUp}
      />
      <AntDesign
        name="downcircle"
        style={styles.listControlIcon}
        onPress={props.onPressDown}
      />
    </View>
  );
};

export default ListScrollController;

const styles = StyleSheet.create({
  listControlIcon: {
    fontSize: 28,
    color: Colors.purple_400,
    marginLeft: 10,
  },
});
