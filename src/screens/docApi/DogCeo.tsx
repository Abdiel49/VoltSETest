import {StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import ScreenView from '../../components/atoms/ScreenView';
import ImageComponent from '../../components/atoms/ImageComponent';
import TextComponent from '../../components/atoms/TextComponent';

import {getDocCeo} from '../../api/dogceo.api';

import {DogCeoType} from '../../types';
import {Colors} from '../../styles/colors';
import normalize from '../../helpers/normalizeFontSize';
import {gStyles} from '../../styles/gStyles';

const DogCeo = () => {
  const [dogData, setDogData] = useState<DogCeoType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getDocCeo();
      if (response) {
        const {data} = response;
        setDogData(data);
      }
    } catch (error) {
      console.error('Error on get data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScreenView isLoading={isLoading} setIsLoading={setIsLoading}>
      {!dogData && <View />}
      {dogData && (
        <View style={styles.card}>
          <View>
            <ImageComponent source={{uri: dogData.message}} />
          </View>

          <View style={gStyles.mv2}>
            <TextComponent text={dogData.status} center bold H2 />
          </View>
        </View>
      )}
    </ScreenView>
  );
};

export default DogCeo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    margin: normalize(20),
    borderRadius: normalize(20),
  },
});
