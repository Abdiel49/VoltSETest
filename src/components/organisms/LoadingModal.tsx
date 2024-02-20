import {Modal, StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

import normalize from '../../helpers/normalizeFontSize';
import {Colors} from '../../styles/colors';
import {LoadingModalProps} from '../../types';

const LoadingModal = (props: LoadingModalProps) => {
  const onClose = () => {
    if (props?.setIsVisible) {
      props?.setIsVisible(!props.isVisible);
    }
  };

  return (
    <Modal
      testID="LoadingModalID"
      animationType={'fade'}
      transparent={true}
      visible={props.isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator
            testID="LoadingActivityIndicatorID"
            size={normalize(60)}
            color={Colors.green}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: Colors.black_a6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
